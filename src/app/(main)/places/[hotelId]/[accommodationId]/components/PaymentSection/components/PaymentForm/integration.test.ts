import { ERRORS } from "@/constants/alerts";

describe("Payment form", () => {
  beforeEach(() => {
    cy.visit("/places/1/3");
  });

  context("Functionality", () => {
    it("should display form with correct elements", () => {
      cy.getByData("payment-form").within(() => {
        cy.validateInputLabel("Cardholder name", "cardholder");
        cy.validateInputLabel("CVC", "cardCVC");
        cy.validateInputLabel("Card number", "cardNumber");
        cy.validateInputLabel("MM/YY", "cardExpirationDate");
        cy.validateInputLabel("Email", "email");
        cy.validateInputLabel("Name", "name");

        cy.validateInput("cardholder", "text");
        cy.validateInput("cardCVC", "text");
        cy.validateInput("cardCVC", "text");
        cy.validateInput("cardNumber", "text");
        cy.validateInput("cardExpirationDate", "text");
        cy.validateInput("email", "email");
        cy.validateInput("name", "text");

        cy.getByData("submit-button").contains("Confirm payment");
      });
    });
  });

  context("Validation", () => {
    it("should display error message about required fields", () => {
      cy.getByData("payment-form").within(() => {
        cy.getByData("submit-button").click();

        cy.getByData("cardholder-field").contains(ERRORS.min.default);
        cy.getByData("cardCVC-field").contains(ERRORS.min.default);
        cy.getByData("cardNumber-field").contains(ERRORS.min.default);
        cy.getByData("cardExpirationDate-field").contains(ERRORS.min.default);
        cy.getByData("email-field").contains(ERRORS.min.default);
        cy.getByData("name-field").contains(ERRORS.min.default);
      });
    });

    it("should display error message about invalid card CVC", () => {
      cy.getByData("payment-form").within(() => {
        cy.get("#cardCVC").type("1");

        cy.getByData("submit-button").click();

        cy.getByData("cardCVC-field").contains(ERRORS.format.cardCVC);
      });
    });

    it("should display error message about invalid card number", () => {
      cy.getByData("payment-form").within(() => {
        cy.get("#cardNumber").type("1");

        cy.getByData("submit-button").click();

        cy.getByData("cardNumber-field").contains(ERRORS.format.cardNumber);
      });
    });

    it("should display error message about invalid card expiration date", () => {
      cy.getByData("payment-form").within(() => {
        cy.get("#cardExpirationDate").type("1");

        cy.getByData("submit-button").click();

        cy.getByData("cardExpirationDate-field").contains(
          ERRORS.format.cardExpirationDate,
        );
      });
    });

    it("should display error message about invalid email", () => {
      cy.getByData("payment-form").within(() => {
        cy.get("#email").type("abc@email");

        cy.getByData("submit-button").click();

        cy.getByData("email-field").contains(ERRORS.format.email);
      });
    });
  });
});
