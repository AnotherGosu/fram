describe("Application", () => {
  context("Redirects", () => {
    it("sould redirect from '/' to '/places'", () => {
      cy.visit("/");

      cy.validatePathname("/places");
    });

    it("should redirect unauthorized user from '/profie' to '/sign-in'", () => {
      cy.visit("/profile");

      cy.validatePathname("/sign-in");
    });

    it("should redirect authorized user from '/sign-in' or '/sign-up' to '/profile'", () => {
      cy.signIn();

      cy.visit("/sign-in");
      cy.validatePathname("/profile");

      cy.visit("/sign-up");
      cy.validatePathname("/profile");
    });
  });

  context("Common Logic", () => {
    it("should display 'not found' page with a link to home page", () => {
      cy.visit("/not-found", { failOnStatusCode: false });

      cy.contains("h2", "Not Found");

      cy.contains("Home Page").click();

      cy.validatePathname("/places");
    });
  });
});
