import { NAVIGATION } from "@/constants/common";

describe("Navigation", () => {
  it("should display navigation links", () => {
    cy.visit("/places");

    cy.get("header").within(() => {
      NAVIGATION.forEach(({ title, href }) => {
        cy.getByData("navigation").contains(title).click();

        cy.validatePathname(href);
      });
    });
  });
});
