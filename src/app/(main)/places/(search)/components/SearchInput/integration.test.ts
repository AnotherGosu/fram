describe("Search Input", () => {
  it("should update 'search' search param, navigate to first page and preserve other search params", () => {
    cy.visit("/places?sort=1");

    cy.getByData("search-input").type("Oslo");

    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "sort=1")
      .and("contain", "search=Oslo");
  });
});
