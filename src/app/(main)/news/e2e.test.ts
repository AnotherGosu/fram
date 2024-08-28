describe("'news' Page", () => {
  beforeEach(() => {
    cy.visit("/news");
  });

  it("should display correct headings", () => {
    cy.getByData("news-section").within(() => {
      cy.contains("h2", "News");
    });

    cy.getByData("popular-news-section").within(() => {
      cy.contains("h2", "Popular news");
    });
  });
});
