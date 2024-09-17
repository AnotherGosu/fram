import { TEST_USER } from "@/constants/auth";

Cypress.Commands.add("getByData", (value, options) => {
  return cy.get(`[data-test=${value}]`, options);
});

Cypress.Commands.add("validatePathname", (value) => {
  return cy.location("pathname").should("eq", value);
});

Cypress.Commands.add(
  "validateExternalLink",
  { prevSubject: true },
  (subject, value) => {
    return cy
      .wrap(subject)
      .should("have.attr", "href", value)
      .then(() => {
        cy.request(value).its("status").should("eq", 200);
      });
  },
);

Cypress.Commands.add("validateInputLabel", (text, htmlFor) => {
  return cy.contains("label", text).should("have.attr", "for", htmlFor);
});

Cypress.Commands.add("validateInput", (id, type) => {
  return cy
    .get(`#${id}`)
    .should("match", "input")
    .and("have.attr", "type", type);
});

Cypress.Commands.add("signIn", () => {
  cy.session("signIn", () => {
    cy.visit("/sign-in");

    cy.get("form").within(() => {
      cy.get("#email").type(TEST_USER.email);
      cy.get("#password").type(TEST_USER.password);

      cy.getByData("submit-button").click();
    });

    cy.validatePathname("/places");
  });
});
