import { NAVIGATION } from "@/constants/common";

import { NavigationLink } from "./components/NavigationLink";

export const Navigation = () => {
  return (
    <nav
      className="hidden md:block"
      data-test="navigation"
    >
      <ul className="flex gap-8">
        {NAVIGATION.map(({ title, href }) => (
          <li key={href}>
            <NavigationLink
              title={title}
              href={href}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
