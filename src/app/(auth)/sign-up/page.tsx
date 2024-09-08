import { Metadata } from "next";

import { SignInLink } from "./components/SignInLink";
import { SignUpForm } from "./components/SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create an account to save your favourite places",
};

export default function Page() {
  return (
    <>
      <SignUpForm />
      <SignInLink />
    </>
  );
}
