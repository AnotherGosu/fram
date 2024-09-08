describe("Sign in link", () => {
  it("should display sign in link", () => {
    cy.visit("/sign-up");

    cy.contains("Already have an account? Sign in").click();

    cy.validatePathname("/sign-in");
  });
});
