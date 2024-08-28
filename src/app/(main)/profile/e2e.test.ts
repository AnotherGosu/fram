describe("'profile' Page", () => {
  beforeEach(() => {
    cy.signIn();
    cy.visit("/profile");
  });

  it("should display 'profile' section with user's email", () => {
    cy.getByData("profile-section").within(() => {
      cy.contains("h2", "Profile");

      cy.validateInputLabel("Email", "email");

      cy.get("#email").should("have.attr", "type", "email").and("be.disabled");

      cy.getCookie("profile").then((cookie) => {
        cy.get("#email").should(
          "have.value",
          decodeURIComponent(cookie?.value!),
        );
      });
    });
  });

  it("should sign out user after clicking 'Sign Out' button", () => {
    cy.getByData("profile-section").within(() => {
      cy.contains("Sign Out").click();

      cy.validatePathname("/places");

      cy.getCookie("profile").should("not.exist");
    });
  });
});
