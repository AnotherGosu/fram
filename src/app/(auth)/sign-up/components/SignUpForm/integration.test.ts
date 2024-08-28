import { AUTH } from "@/constants/test";

describe("Sign up form", () => {
  beforeEach(() => {
    cy.visit("/sign-up");
  });

  context("Functionality", () => {
    it("should display form with correct elements", () => {
      cy.get("form").within(() => {
        cy.contains("label", "Email").should("have.attr", "for", "email");
        cy.contains("label", "Password").should("have.attr", "for", "password");
        cy.contains("label", "Name").should("have.attr", "for", "name");
        cy.contains("label", "Phone number").should(
          "have.attr",
          "for",
          "phone",
        );

        cy.get("#email").should("have.attr", "type", "email");
        cy.get("#password").should("have.attr", "type", "password");
        cy.get("#name");
        cy.get("#phone").should("have.attr", "type", "tel");

        cy.contains("button", "Sign up");
      });
    });

    it("should redirect to home page after successful form submission", () => {
      cy.get("form").within(() => {
        cy.get("#email").type(AUTH.email.right);
        cy.get("#password").type(AUTH.password.right);

        cy.getByData("sign-up-button").click();

        cy.validatePathname("/places");
      });
    });
  });

  context("Validation", () => {
    it("should display error message about required fields", () => {
      cy.get("form").within(() => {
        cy.getByData("sign-up-button").click();

        cy.contains("Email is required");
        cy.contains("Should contain at least 8 characters");
      });
    });

    it("should display error message about invalid email", () => {
      cy.get("form").within(() => {
        cy.get("#email").type(AUTH.email.wrong);

        cy.getByData("sign-up-button").click();

        cy.contains("Invalid email");
      });
    });

    it("should display error message about invalid password", () => {
      cy.get("form").within(() => {
        cy.get("#email").type(AUTH.email.right);
        cy.get("#password").type(AUTH.password.wrong);

        cy.getByData("sign-up-button").click();

        cy.contains("Should contain at least 8 characters");
      });
    });
  });
});
