import { Label } from ".";

describe("<Label />", () => {
  it("should mount label with correct text and 'for' attribute", () => {
    const text = "Email";
    const htmlFor = "email";

    cy.mount(<Label htmlFor={htmlFor}>{text}</Label>);

    cy.contains("label", text).should("have.attr", "for", htmlFor);
  });

  it("should mount label with required indicator", () => {
    cy.mount(<Label required>Email</Label>);

    cy.get("label").then(($el) => {
      const afterElement = window.getComputedStyle($el[0], "::after");
      const afterContent = afterElement.getPropertyValue("content");

      expect(afterContent).to.eq('"*"');
    });
  });
});
