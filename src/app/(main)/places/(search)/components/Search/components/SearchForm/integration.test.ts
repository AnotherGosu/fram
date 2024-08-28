describe("Search Form", () => {
  it("should update 'city', 'occupancy', 'from', 'to' search params, navigate to first page and preserve other search params", () => {
    cy.visit("/places?sort=2");

    cy.getByData("search-form").within(() => {
      // Select city
      cy.getByData("city-button").click();
      cy.getByData("city-content").find("[role='option']").first().click();

      // Select occupancy
      cy.getByData("occupancy-button").click();
      cy.getByData("occupancy-content").find("[role='option']").first().click();

      // Select date
      cy.getByData("date-button").click();
      cy.getByData("date-content", { withinSubject: null })
        .find("[role='gridcell']")
        .first()
        .click();
      cy.getByData("date-content", { withinSubject: null })
        .find("[role='gridcell']")
        .last()
        .click();

      // Submit form
      cy.contains("Search").click();

      cy.location("search")
        .should("contain", "page=1")
        .and("contain", "sort=2");

      cy.location("search")
        .should("match", /city=\d+/)
        .and("match", /occupancy=\d+/)
        .and("match", /from=.+/)
        .and("match", /to=.+/);
    });
  });
});
