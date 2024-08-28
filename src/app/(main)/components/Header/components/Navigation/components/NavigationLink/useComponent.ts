import { usePathname } from "next/navigation";

export const useComponent = (href: string) => {
  const pathname = usePathname();

  const isActive = href === "/" ? href === pathname : pathname.startsWith(href);

  return { isActive };
};
