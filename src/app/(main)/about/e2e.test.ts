import { SOCIAL_LINKS } from "@/constants/common";

describe("'about' page", () => {
  beforeEach(() => {
    cy.visit("/about");
  });

  it("should display 'general' section", () => {
    cy.getByData("general-section").within(() => {
      cy.contains("h2", "General information");
    });
  });

  it("should display 'credits' section", () => {
    cy.getByData("credits-section").within(() => {
      cy.contains("h2", "Credits");

      cy.contains("Maksim Dubinin").validateExternalLink(
        SOCIAL_LINKS.development,
      );

      cy.contains("Danil Kozlov").validateExternalLink(SOCIAL_LINKS.design);

      cy.contains("Unsplash").validateExternalLink(SOCIAL_LINKS.unsplash);

      cy.contains("ChatGPT").validateExternalLink(SOCIAL_LINKS.gpt);
    });
  });
});
