import { Checkbox } from ".";

describe("<Checkbox />", () => {
  it("should mount checkbox input and check it's logic", () => {
    const defaultValue = false;

    cy.mount(
      <Checkbox
        defaultValue={defaultValue}
        callback={cy.stub().as("callback")}
      />,
    );

    cy.get("input")
      .should("have.attr", "type", "checkbox")
      .and("not.be.checked");

    cy.get("input").check();
    cy.get("input").should("be.checked");
    cy.get("@callback").should("be.calledWith", !defaultValue);

    cy.get("input").uncheck();
    cy.get("input").should("not.be.checked");
    cy.get("@callback").should("be.calledWith", defaultValue);
  });
});
