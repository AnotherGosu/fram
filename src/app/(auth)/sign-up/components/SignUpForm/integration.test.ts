import { ERRORS } from "@/constants/alerts";
import { TEST_USER } from "@/constants/auth";

describe("Sign up form", () => {
  beforeEach(() => {
    cy.visit("/sign-up");
  });

  context("Functionality", () => {
    it("should display form with correct elements", () => {
      cy.get("form").within(() => {
        cy.validateInputLabel("Email", "email");
        cy.validateInputLabel("Password", "password");
        cy.validateInputLabel("Name", "name");

        cy.validateInput("email", "email");
        cy.validateInput("password", "password");
        cy.validateInput("name", "text");

        cy.getByData("submit-button").contains("Sign up");
      });
    });
  });

  context("Validation", () => {
    it("should display error message about required fields", () => {
      cy.get("form").within(() => {
        cy.getByData("submit-button").click();

        cy.getByData("email-field").contains(ERRORS.min.default);
        cy.getByData("password-field").contains(ERRORS.min.password);
      });
    });

    it("should display error message about invalid email", () => {
      cy.get("form").within(() => {
        cy.get("#email").type("abc@email");

        cy.getByData("submit-button").click();

        cy.getByData("email-field").contains(ERRORS.format.email);
      });
    });

    it("should display error message about invalid password", () => {
      cy.get("form").within(() => {
        cy.get("#email").type(TEST_USER.email);
        cy.get("#password").type("Pass");

        cy.getByData("submit-button").click();

        cy.getByData("password-field").contains(ERRORS.min.password);
      });
    });
  });
});
