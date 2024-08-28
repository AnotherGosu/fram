import { Item } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

interface NavigationItemProps {
  title: string;
  href: string;
}

export const NavigationItem = ({ title, href }: NavigationItemProps) => {
  return (
    <Item
      asChild
      className="select-none px-4 py-2 transition data-[highlighted]:bg-stone-100 data-[highlighted]:outline-none"
    >
      <Link href={href}>{title}</Link>
    </Item>
  );
};
