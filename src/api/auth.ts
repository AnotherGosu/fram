"use server";

import bcrypt from "bcrypt";
import { SignJWT, decodeJwt } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { User } from "@/types/entities";
import {
  ProfileFormData,
  SignInFormData,
  SignUpFormData,
} from "@/types/schemas";

import { db } from "@/utils/db";

import { ERRORS } from "@/constants/alerts";
import { SECRET, TOKEN_COOKIE_NAME } from "@/constants/auth";

export const signIn = async (formData: SignInFormData) => {
  try {
    const { email, password } = formData;

    const user = await db
      .selectFrom("users")
      .selectAll()
      .where("email", "=", email)
      .executeTakeFirst();

    if (!user) {
      throw new Error(ERRORS.auth.invalidCredentials, { cause: "expected" });
    }

    const isValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isValid) {
      throw new Error(ERRORS.auth.invalidCredentials, { cause: "expected" });
    }

    const jwt = await new SignJWT({ sub: formData.email })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(SECRET);

    cookies().set({
      name: TOKEN_COOKIE_NAME,
      value: jwt,
      httpOnly: true,
      maxAge: 24 * 60 * 60,
    });
  } catch (err: any) {
    throw new Error(err.cause === "expected" ? err.message : ERRORS.default);
  }

  redirect("/places");
};

export const signUp = async (formData: SignUpFormData) => {
  try {
    const { email, password, name } = formData;

    const user = await db
      .selectFrom("users")
      .selectAll()
      .where("email", "=", email)
      .executeTakeFirst();

    if (user) {
      throw new Error(ERRORS.auth.registeredEmail, { cause: "expected" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db
      .insertInto("users")
      .values({ email, hashedPassword, name })
      .executeTakeFirstOrThrow();

    return signIn(formData);
  } catch (err: any) {
    throw new Error(err.cause === "expected" ? err.message : ERRORS.default);
  }
};

export const signOut = async () => {
  cookies().delete(TOKEN_COOKIE_NAME);

  redirect("/places");
};

export const getCurrentUser = async (): Promise<User | null> => {
  const token = cookies().get(TOKEN_COOKIE_NAME)?.value;

  if (!token) return null;

  try {
    const { sub } = decodeToken(token);

    return db
      .selectFrom("users")
      .select(["id", "email", "name"])
      .where("email", "=", sub)
      .executeTakeFirstOrThrow();
  } catch (err: any) {
    throw new Error(err.cause === "expected" ? err.message : ERRORS.default);
  }
};

export const updateUser = async (formData: ProfileFormData) => {
  const token = cookies().get(TOKEN_COOKIE_NAME)?.value;

  if (!token) redirect("/sign-in");

  try {
    const { sub } = decodeToken(token);

    await db
      .updateTable("users")
      .set({ name: formData.name })
      .where("email", "=", sub)
      .executeTakeFirstOrThrow();
  } catch (err: any) {
    throw new Error(err.cause === "expected" ? err.message : ERRORS.default);
  }
};

const decodeToken = (token: string) => {
  // Token verification is handled by middleware
  return decodeJwt<{ sub: string }>(token);
};
