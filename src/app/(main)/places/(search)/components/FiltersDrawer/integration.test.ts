describe("Filters Drawer", () => {
  it("should check component's toggle logic", () => {
    cy.viewport("ipad-2");
    cy.visit("/places");

    // Check if drawer opens on button click
    cy.getByData("filters-drawer-button").click();
    cy.getByData("filters").should("be.visible");

    // Check if drawer closes on close button click
    cy.getByData("filters-drawer-close-button").click();
    cy.getByData("filters").should("not.be.visible");

    // Check if drawer closes on overlay click
    cy.getByData("filters-drawer-button").click();
    cy.getByData("filters-drawer-overlay").click();
    cy.getByData("filters").should("not.be.visible");
  });
});
