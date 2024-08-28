import Link from "next/link";

import { NAVIGATION } from "@/constants/common";

export const Menu = () => {
  return (
    <section data-test="menu">
      <h3 className="mb-2 text-lg font-medium">Menu</h3>

      <nav>
        <ul className="flex flex-col gap-2 text-sm text-white/70">
          {NAVIGATION.map(({ title, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="w-max hover:text-white focus:outline-blue-300"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
