"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { SignInFormData, SignUpFormData } from "@/types/schemas";

export const signIn = async (formData: SignInFormData) => {
  cookies().set({
    name: "profile",
    value: formData.email,
    httpOnly: true,
    maxAge: 24 * 60 * 60,
  });

  redirect("/places");
};

export const signUp = async (formData: SignUpFormData) => {
  cookies().set({
    name: "profile",
    value: formData.email,
    httpOnly: true,
    maxAge: 24 * 60 * 60,
  });

  redirect("/places");
};

export const signOut = async () => {
  cookies().delete("profile");

  redirect("/places");
};

export const getProfile = async () => {
  const profile = cookies().get("profile");

  return profile?.value;
};
