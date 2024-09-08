import { Metadata } from "next";

import { SignInForm } from "./components/SignInForm";
import { SignUpLink } from "./components/SignUpLink";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to view your favourite places",
};

export default function Page() {
  return (
    <>
      <SignInForm />
      <SignUpLink />
    </>
  );
}
