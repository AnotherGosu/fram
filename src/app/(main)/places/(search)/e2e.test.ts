describe("Places page", () => {
  beforeEach(() => {
    cy.visit("/places");
  });

  it("should hide filters section and display filters drawer button on mobile view", () => {
    cy.getByData("filters-drawer-button").should("not.be.visible");
    cy.getByData("filters-section").should("be.visible");

    cy.viewport("ipad-2");

    cy.getByData("filters-drawer-button").should("be.visible");
    cy.getByData("filters-section").should("not.be.visible");
  });
});
