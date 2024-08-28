import { CircleUserRound } from "lucide-react";
import Link from "next/link";

import { getProfile } from "@/api/auth";

import { Button } from "@/components/common/Button";

export const Authentication = async () => {
  const profile = await getProfile();

  return (
    <div
      className="hidden gap-3 md:flex"
      data-test="authentication"
    >
      {profile ? (
        <Button
          asChild
          isIconSize
          variant="ghost"
          aria-label="Profile"
          data-test="profile-link"
        >
          <Link href="/profile">
            <CircleUserRound className="!size-6" />
          </Link>
        </Button>
      ) : (
        <>
          <Button
            asChild
            variant="ghost"
          >
            <Link href="/sign-up">Sign up</Link>
          </Button>

          <Button asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </>
      )}
    </div>
  );
};
