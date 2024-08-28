describe("Pagination", () => {
  it("should update 'page' search param and preserver other search params", () => {
    cy.visit("/places?sort=2");

    cy.getByData("pagination-2").click();
    cy.location("search").should("contain", "page=2");
    cy.location("search").should("contain", "sort=2");

    cy.getByData("pagination-1").click();
    cy.location("search").should("contain", "page=1");
    cy.location("search").should("contain", "sort=2");
  });
});
