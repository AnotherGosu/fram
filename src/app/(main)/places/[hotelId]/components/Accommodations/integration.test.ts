describe("Accommodations", () => {
  beforeEach(() => {
    cy.visit("/places/1");
  });

  it("should display hotel's accommodations with correct links", () => {
    cy.getByData("accommodations")
      .children("article")
      .each((_, idx) => {
        cy.getByData("accommodations")
          .children("article")
          .eq(idx)
          .find("a")
          .then(($link) => {
            const href = $link.attr("href");

            cy.wrap($link).click();

            cy.validatePathname(href || "");

            cy.go(-1);
          });
      });
  });
});
