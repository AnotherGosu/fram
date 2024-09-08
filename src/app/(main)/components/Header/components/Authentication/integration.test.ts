import { TOKEN_COOKIE_NAME } from "@/constants/auth";

describe("Authentication", () => {
  it("should display authentication buttons if user is not authorized", () => {
    cy.visit("/places");

    cy.getByData("sign-in-button").click();
    cy.validatePathname("/sign-in");

    cy.visit("/places");

    cy.getByData("sign-up-button").click();
    cy.validatePathname("/sign-up");
  });

  it("should display profile button if user is authorized", () => {
    cy.signIn();

    cy.visit("/places");

    cy.getByData("profile-button").click();

    cy.validatePathname("/profile");
  });

  it("should display sign-out button if user is authorized", () => {
    cy.signIn();

    cy.visit("/profile");

    cy.getByData("sign-out-button").click();

    cy.validatePathname("/places");

    cy.getCookie(TOKEN_COOKIE_NAME).should("not.exist");
  });
});
