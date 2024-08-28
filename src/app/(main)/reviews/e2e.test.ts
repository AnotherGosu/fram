describe("'reviews' Page", () => {
  beforeEach(() => {
    cy.visit("/reviews");
  });

  it("should display correct headings", () => {
    cy.getByData("reviews-section").within(() => {
      cy.contains("h2", "Reviews");
    });
  });
});
