import { ERRORS } from "@/constants/alerts";
import { TEST_USER, TOKEN_COOKIE_NAME } from "@/constants/auth";

describe("Sign in form", () => {
  beforeEach(() => {
    cy.visit("/sign-in");
  });

  context("Functionality", () => {
    it("should display form with correct elements", () => {
      cy.get("form").within(() => {
        cy.validateInputLabel("Email", "email");
        cy.validateInputLabel("Password", "password");

        cy.validateInput("email", "email");
        cy.validateInput("password", "password");

        cy.getByData("submit-button").contains("Sign in");
      });
    });

    it("should redirect to home page after successful form submission and set token cookie", () => {
      cy.get("form").within(() => {
        cy.get("#email").type(TEST_USER.email);
        cy.get("#password").type(TEST_USER.password);

        cy.getByData("submit-button").click();
      });

      cy.validatePathname("/places");

      cy.getCookie(TOKEN_COOKIE_NAME).should("exist");
    });
  });

  context("Validation", () => {
    it("should display error message about required fields", () => {
      cy.get("form").within(() => {
        cy.getByData("submit-button").click();

        cy.getByData("email-field").contains(ERRORS.min.default);
        cy.getByData("password-field").contains(ERRORS.min.default);
      });
    });

    it("should display error message about invalid email", () => {
      cy.get("form").within(() => {
        cy.get("#email").type("abc@email");

        cy.getByData("submit-button").click();

        cy.getByData("email-field").contains(ERRORS.format.email);
      });
    });
  });
});
