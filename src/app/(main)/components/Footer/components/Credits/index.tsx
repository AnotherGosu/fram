import { SOCIAL_LINKS } from "@/constants/common";

import { FacebookIcon } from "./components/FacebookIcon";
import { InstagramIcon } from "./components/InstagramIcon";
import { XIcon } from "./components/XIcon";

export const Credits = () => {
  return (
    <section data-test="credits">
      <h3 className="mb-2 text-lg font-medium">Fram</h3>

      <ul className="mb-4 flex flex-col gap-2 text-sm text-white/70">
        <li>
          <a
            target="_blank"
            href={SOCIAL_LINKS.development}
            className="w-max hover:text-white focus:outline-blue-300"
            data-test="development-link"
          >
            © Developed by Maksim Dubinin
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href={SOCIAL_LINKS.design}
            className="w-max hover:text-white focus:outline-blue-300"
            data-test="design-link"
          >
            © Designed by Danil Kozlov
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <a
          target="_blank"
          href={SOCIAL_LINKS.instagram}
          aria-label="Instagram link"
          data-test="instagram-link"
        >
          <InstagramIcon />
        </a>

        <a
          target="_blank"
          href={SOCIAL_LINKS.x}
          aria-label="X link"
          data-test="x-link"
        >
          <XIcon />
        </a>

        <a
          target="_blank"
          href={SOCIAL_LINKS.facebook}
          aria-label="Facebook link"
          data-test="facebook-link"
        >
          <FacebookIcon />
        </a>
      </div>
    </section>
  );
};
