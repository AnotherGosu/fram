describe("Authentication", () => {
  it("should display authentication links if user is not authorized", () => {
    cy.visit("/places");

    cy.get("header").within(() => {
      cy.getByData("authentication").contains("Sign in").click();
      cy.validatePathname("/sign-in");

      cy.visit("/places");

      cy.getByData("authentication").contains("Sign up").click();
      cy.validatePathname("/sign-up");
    });
  });

  it("should display profile link if user is authorized", () => {
    cy.signIn();

    cy.visit("/places");

    cy.get("header").within(() => {
      cy.getByData("profile-link").click();
      cy.validatePathname("/profile");
    });
  });
});
