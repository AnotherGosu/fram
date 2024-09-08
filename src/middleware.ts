import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { SECRET } from "./constants/auth";
import { TOKEN_COOKIE_NAME } from "./constants/auth";

export async function middleware(request: NextRequest) {
  const {
    nextUrl: { pathname },
  } = request;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/places", request.url));
  }

  // Authentication logic for protected pages

  const token = cookies().get(TOKEN_COOKIE_NAME)?.value;

  let isValidToken = false;

  if (token) {
    try {
      await jwtVerify(token, SECRET);

      isValidToken = true;
    } catch {
      cookies().delete(TOKEN_COOKIE_NAME);
    }
  }

  if ((pathname === "/sign-in" || pathname === "/sign-up") && isValidToken) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  if (pathname === "/profile" && !isValidToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = { matcher: ["/", "/sign-in", "/sign-up", "/profile"] };
