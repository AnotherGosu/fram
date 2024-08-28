describe("Heading", () => {
  it("should display heading link", () => {
    cy.visit("/news");

    cy.get("header").within(() => {
      cy.contains("h1", "Fram").click();

      cy.validatePathname("/places");
    });
  });
});
