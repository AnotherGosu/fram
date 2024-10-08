"use client";

import { Button } from "@/components/common/Button";

import { useComponent } from "./useComponent";

export const SignOutButton = () => {
  const { isLoading, onSignOut } = useComponent();

  return (
    <Button
      isLoading={isLoading}
      onClick={onSignOut}
      className="w-max"
      data-test="sign-out-button"
    >
      Sign Out
    </Button>
  );
};
