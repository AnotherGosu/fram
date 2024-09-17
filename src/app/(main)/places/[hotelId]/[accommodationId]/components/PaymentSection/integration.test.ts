import { TEST_USER } from "@/constants/auth";
import { TEST_PAYMENT } from "@/constants/payment";

describe("Payment section", () => {
  beforeEach(() => {
    cy.visit("/places/1/3");
  });

  it("should display confirmation dialog on successful payment form submit", () => {
    cy.getByData("payment-form").within(() => {
      cy.get("#cardholder").type(TEST_PAYMENT.carholder);
      cy.get("#cardCVC").type(TEST_PAYMENT.cardCVC);
      cy.get("#cardNumber").type(TEST_PAYMENT.cardNumber);
      cy.get("#cardExpirationDate").type(TEST_PAYMENT.cardExpirationDate);
      cy.get("#email").type(TEST_USER.email);
      cy.get("#name").type(TEST_USER.name);

      cy.getByData("submit-button").click();
    });

    cy.getByData("confirmation-dialog-content").should("be.visible");
  });
});
