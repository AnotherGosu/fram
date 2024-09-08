import { TOKEN_COOKIE_NAME } from "@/constants/auth";
import { NAVIGATION } from "@/constants/common";

describe("Navigation Menu", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("/places");
  });

  it("should display navigation links", () => {
    NAVIGATION.forEach(({ title, href }) => {
      cy.getByData("navigation-menu-button").click();
      cy.getByData("navigation-menu-content").contains(title).click();
      cy.validatePathname(href);
    });
  });

  it("should display authentication links if user is not authorized", () => {
    cy.getByData("navigation-menu-button").click();

    cy.getByData("navigation-menu-content").contains("Sign in").click();
    cy.validatePathname("/sign-in");

    cy.visit("/places");
    cy.getByData("navigation-menu-button").click();

    cy.getByData("navigation-menu-content").contains("Sign up").click();
    cy.validatePathname("/sign-up");
  });

  it("should display profile link if user is authorized", () => {
    cy.signIn();

    cy.visit("/places");

    cy.getByData("navigation-menu-button").click();

    cy.getByData("navigation-menu-content").contains("Profile").click();

    cy.validatePathname("/profile");
  });

  it("should display sign-out option if user is authorized", () => {
    cy.signIn();

    cy.visit("/profile");

    cy.getByData("navigation-menu-button").click();

    cy.getByData("navigation-menu-content").contains("Sign out").click();

    cy.validatePathname("/places");

    cy.getCookie(TOKEN_COOKIE_NAME).should("not.exist");
  });
});
