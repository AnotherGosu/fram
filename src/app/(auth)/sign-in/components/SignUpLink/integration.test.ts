describe("Sign up link", () => {
  it("should display sign up link", () => {
    cy.visit("/sign-in");

    cy.contains("Don't have an account? Sign up").click();

    cy.validatePathname("/sign-up");
  });
});
