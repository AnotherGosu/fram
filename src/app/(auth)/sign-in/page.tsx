import { Metadata } from "next";
import Link from "next/link";

import { SignInForm } from "./components/SignInForm";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to view your favourite places",
};

export default function Page() {
  return (
    <>
      <SignInForm />

      <Link
        href="/sign-up"
        className="focus-ring text-sm text-stone-500 hover:underline"
      >
        Don&#39;t have an account? Sign up
      </Link>
    </>
  );
}
