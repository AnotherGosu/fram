"use client";

import { Item } from "@radix-ui/react-dropdown-menu";

import { Loader } from "@/components/common/Loader";

import { useComponent } from "./useComponent";

export const SignOutItem = () => {
  const { isLoading, onSignOut } = useComponent();

  return (
    <Item
      onClick={onSignOut}
      disabled={isLoading}
      className="flex select-none items-center gap-2 px-4 py-2 transition disabled:pointer-events-none disabled:opacity-50 data-[highlighted]:bg-stone-100 data-[highlighted]:outline-none"
    >
      Sign out
      {isLoading && <Loader className="size-4" />}
    </Item>
  );
};
