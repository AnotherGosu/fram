describe("Previews", () => {
  beforeEach(() => {
    cy.visit("/places/1");
  });

  it("should open preview dialog when clicking on preview", () => {
    cy.getByData("previews")
      .children("img")
      .each(($child) => {
        cy.wrap($child).click();

        cy.getByData("preview-dialog-content").should("be.visible");

        cy.getByData("preview-dialog-overlay").click(0, 0, { force: true });

        cy.getByData("preview-dialog-content").should("not.exist");
      });
  });
});
