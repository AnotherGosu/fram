import { Metadata } from "next";

import { SOCIAL_LINKS } from "@/constants/common";

export const metadata: Metadata = {
  title: "About Us",
  description: "Find more about our service",
};

export default function Page() {
  return (
    <>
      <section
        className="mb-8"
        data-test="general-section"
      >
        <h2 className="mb-4 text-xl font-semibold">General information</h2>

        <p>
          Fram is a non-commercial project inspired by beauty of Norway. Fram
          doesn&#39;t collect any personal data or process any payment
          transactions. Even though, avoid putting any sestivie data in existing
          forms.
        </p>
      </section>

      <section data-test="credits-section">
        <h2 className="mb-4 text-xl font-semibold">Credits</h2>

        <ul className="list-inside list-disc leading-relaxed [&_a]:underline">
          <li>
            Development -{" "}
            <a
              href={SOCIAL_LINKS.development}
              target="_blank"
            >
              Maksim Dubinin
            </a>
          </li>

          <li>
            Design -{" "}
            <a
              href={SOCIAL_LINKS.design}
              target="_blank"
            >
              Danil Kozlov
            </a>
          </li>

          <li>
            Image assets -{" "}
            <a
              href={SOCIAL_LINKS.unsplash}
              target="_blank"
            >
              Unsplash
            </a>
          </li>

          <li>
            Text assets -{" "}
            <a
              href={SOCIAL_LINKS.gpt}
              target="_blank"
            >
              ChatGPT
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
