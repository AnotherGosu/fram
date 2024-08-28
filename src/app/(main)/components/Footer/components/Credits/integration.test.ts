import { SOCIAL_LINKS } from "@/constants/common";

describe("Credits", () => {
  it("should display 'Credits' section with credit links", () => {
    cy.visit("/places");

    cy.get("footer").within(() => {
      cy.getByData("credits").contains("h3", "Fram");

      cy.getByData("development-link").validateExternalLink(
        SOCIAL_LINKS.development,
      );

      cy.getByData("design-link").validateExternalLink(SOCIAL_LINKS.design);

      cy.getByData("instagram-link").validateExternalLink(
        SOCIAL_LINKS.instagram,
      );

      cy.getByData("x-link").validateExternalLink(SOCIAL_LINKS.x);

      cy.getByData("facebook-link").validateExternalLink(SOCIAL_LINKS.facebook);
    });
  });
});
