import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";

import { getCurrentUser } from "@/api/auth";

import { NAVIGATION } from "@/constants/common";

import { Button } from "@/components/common/Button";

import { NavigationItem } from "./components/NavigationItem";
import { SignOutItem } from "./components/SignOutItem";

export const NavigationMenu = async () => {
  const user = await getCurrentUser();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          isIconSize
          variant="ghost"
          className="md:hidden"
          aria-label="Toggle navigation menu"
          data-test="navigation-menu-button"
        >
          <Menu />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="w-[150px] overflow-hidden rounded-md border border-slate-200 bg-white shadow-2xl data-[side=bottom]:animate-slideUpAndFade"
          data-test="navigation-menu-content"
        >
          <DropdownMenu.Group className="flex flex-col">
            {NAVIGATION.map((link) => (
              <NavigationItem
                key={link.title}
                {...link}
              />
            ))}
          </DropdownMenu.Group>

          <DropdownMenu.Group className="flex flex-col">
            {user ? (
              <>
                <NavigationItem
                  title="Profile"
                  href="/profile"
                />

                <SignOutItem />
              </>
            ) : (
              <>
                <NavigationItem
                  title="Sign up"
                  href="/sign-up"
                />

                <NavigationItem
                  title="Sign in"
                  href="/sign-in"
                />
              </>
            )}
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
