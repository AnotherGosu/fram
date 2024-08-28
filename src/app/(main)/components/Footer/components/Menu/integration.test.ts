import { NAVIGATION } from "@/constants/common";

describe("Menu", () => {
  it("should display 'Menu' section with navigation links", () => {
    cy.visit("/places");

    cy.get("footer").within(() => {
      cy.getByData("menu").contains("h3", "Menu");

      NAVIGATION.forEach(({ title, href }) => {
        cy.getByData("menu").contains(title).click();

        cy.validatePathname(href);
      });
    });
  });
});
