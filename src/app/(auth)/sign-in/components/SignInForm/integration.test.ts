import { AUTH } from "@/constants/test";

describe("Sign in form", () => {
  beforeEach(() => {
    cy.visit("/sign-in");
  });

  context("Functionality", () => {
    it("should display form with correct elements", () => {
      cy.get("form").within(() => {
        cy.contains("label", "Email").should("have.attr", "for", "email");
        cy.contains("label", "Password").should("have.attr", "for", "password");

        cy.get("#email").should("have.attr", "type", "email");
        cy.get("#password").should("have.attr", "type", "password");

        cy.contains("button", "Sign in");
      });
    });

    it("should redirect to home page after successful form submission", () => {
      cy.get("form").within(() => {
        cy.get("#email").type(AUTH.email.right);
        cy.get("#password").type(AUTH.password.right);

        cy.getByData("sign-in-button").click();

        cy.validatePathname("/places");
      });
    });
  });

  context("Validation", () => {
    it("should display error message about required fields", () => {
      cy.get("form").within(() => {
        cy.getByData("sign-in-button").click();

        cy.contains("Email is required");
        cy.contains("Password is required");
      });
    });

    it("should display error message about invalid email", () => {
      cy.get("form").within(() => {
        cy.get("#email").type(AUTH.email.wrong);

        cy.getByData("sign-in-button").click();

        cy.contains("Invalid email");
      });
    });
  });
});
