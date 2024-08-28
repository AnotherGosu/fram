import { AUTH } from "@/constants/test";

Cypress.Commands.add("getByData", (value: string, options) => {
  return cy.get(`[data-test=${value}]`, options);
});

Cypress.Commands.add("validatePathname", (value: string) => {
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

Cypress.Commands.add("signIn", () => {
  cy.session("signIn", () => {
    cy.visit("/sign-in");

    cy.get("form").within(() => {
      cy.get("#email").type(AUTH.email.right);
      cy.get("#password").type(AUTH.password.right);
      cy.contains("Sign in").click();

      cy.validatePathname("/places");

      cy.getCookie("profile").should(
        "have.property",
        "value",
        encodeURIComponent(AUTH.email.right),
      );
    });
  });
});
