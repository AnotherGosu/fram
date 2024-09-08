import Link from "next/link";

import { getCurrentUser } from "@/api/auth";

import { Button } from "@/components/common/Button";

import { SignOutButton } from "./components/SignOutButton";

export const Authentication = async () => {
  const user = await getCurrentUser();

  return (
    <div
      className="hidden gap-3 md:flex"
      data-test="authentication"
    >
      {user ? (
        <>
          <Button
            asChild
            variant="ghost"
            data-test="profile-button"
          >
            <Link href="/profile">Profile</Link>
          </Button>

          <SignOutButton />
        </>
      ) : (
        <>
          <Button
            asChild
            variant="ghost"
            data-test="sign-up-button"
          >
            <Link href="/sign-up">Sign up</Link>
          </Button>

          <Button
            asChild
            data-test="sign-in-button"
          >
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </>
      )}
    </div>
  );
};
