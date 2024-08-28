"use client";

import Link from "next/link";

import { cn } from "@/utils/cn";

import { useComponent } from "./useComponent";

interface NavigationLinkProps {
  title: string;
  href: string;
}

export const NavigationLink = ({ title, href }: NavigationLinkProps) => {
  const { isActive } = useComponent(href);

  return (
    <Link
      href={href}
      className={cn(
        "border-b border-transparent p-0.5 text-slate-500 transition focus:outline-blue-300",
        {
          "hover:border-slate-500 hover:text-slate-700": !isActive,
          "font-medium text-slate-950": isActive,
        },
      )}
    >
      {title}
    </Link>
  );
};
