describe("Contacts", () => {
  it("should display 'Contacts' section with contact information", () => {
    cy.visit("/places");

    cy.get("footer").within(() => {
      cy.getByData("contacts").contains("h3", "Contacts");

      cy.getByData("schedule").contains("MD - FR");
      cy.getByData("schedule").contains("10:00");
      cy.getByData("schedule").contains("18:00");

      cy.getByData("phone-number")
        .contains("+0987654321")
        .should("have.attr", "href", "tel:+0987654321");

      cy.getByData("email")
        .contains("support@fram.com")
        .should("have.attr", "href", "mailto:support@fram.com");

      cy.contains("address", "Karl Johans gate 22, 0159 Oslo, Norway");
    });
  });
});
