import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getProfile } from "./api/auth";

export async function middleware(request: NextRequest) {
  const {
    nextUrl: { pathname },
  } = request;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/places", request.url));
  }

  const profile = await getProfile();

  if ((pathname === "/sign-in" || pathname === "/sign-up") && profile) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  if (pathname === "/profile" && !profile) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = { matcher: ["/", "/sign-in", "/sign-up", "/profile"] };
