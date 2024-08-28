import { Metadata } from "next";
import Link from "next/link";

import { SignUpForm } from "./components/SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create an account to save your favourite places",
};

export default function Page() {
  return (
    <>
      <SignUpForm />

      <Link
        href="/sign-in"
        className="focus-ring text-sm text-stone-500 hover:underline"
      >
        Already have an account? Sign in
      </Link>
    </>
  );
}
