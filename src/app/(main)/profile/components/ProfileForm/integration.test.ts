import { ERRORS, NOTIFICATIONS } from "@/constants/alerts";
import { TEST_USER } from "@/constants/auth";

describe("Profile form", () => {
  beforeEach(() => {
    cy.signIn();
    cy.visit("/profile");
  });

  after(() => {
    cy.signIn();

    cy.visit("/profile");

    cy.get("form").within(() => {
      cy.get("#name").clear().type(TEST_USER.name);

      cy.getByData("submit-button").click();
    });
  });

  context("Functionality", () => {
    it("should display form with correct elements", () => {
      cy.get("form").within(() => {
        cy.validateInputLabel("Email", "email");
        cy.validateInputLabel("Name", "name");

        cy.validateInput("email", "email").and(
          "contain.value",
          TEST_USER.email,
        );
        cy.validateInput("name", "text").and("contain.value", TEST_USER.name);

        cy.getByData("submit-button").contains("Update");
      });
    });

    it("should update profile on submit", () => {
      cy.get("form").within(() => {
        cy.get("#name").clear().type(TEST_USER.newName);

        cy.getByData("submit-button").click();
      });

      cy.get("[data-sonner-toast]").contains(
        NOTIFICATIONS.success.profileUpdate,
      );
    });
  });

  context("Validation", () => {
    it("should display error message about required fields", () => {
      cy.get("form").within(() => {
        cy.get("#name").clear();

        cy.getByData("submit-button").click();

        cy.getByData("name-field").contains(ERRORS.min.default);
      });
    });
  });
});
