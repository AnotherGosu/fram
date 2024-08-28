describe("Header", () => {
  it("should hide navigation and authencitcation links and display navigation menu on mobile view", () => {
    cy.visit("/places");

    cy.get("header").within(() => {
      cy.getByData("navigation").should("be.visible");
      cy.getByData("authentication").should("be.visible");
      cy.getByData("navigation-menu-button").should("not.be.visible");
    });

    cy.viewport("iphone-x");

    cy.get("header").within(() => {
      cy.getByData("navigation").should("not.be.visible");
      cy.getByData("authentication").should("not.be.visible");
      cy.getByData("navigation-menu-button").should("be.visible");
    });
  });
});
