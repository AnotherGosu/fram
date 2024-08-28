import { StepInput } from ".";

describe("<StepInput />", () => {
  it("should mount component and check it's logic", () => {
    const defaultValue = 0;

    cy.mount(
      <StepInput
        defaultValue={defaultValue}
        callback={cy.stub().as("callback")}
        dataTest="step-input"
      />,
    );

    // Check the defaults
    cy.getByData("step-input-value").should("have.text", defaultValue);
    cy.getByData("step-input-decrement").should("be.disabled");

    // Increment input and check if updated value is correct
    cy.getByData("step-input-increment").click();
    cy.get("@callback").should("be.calledWith", defaultValue + 1);
    cy.getByData("step-input-value").should("have.text", defaultValue + 1);

    // Decrement input and check if updated value is correct
    cy.getByData("step-input-decrement").click();
    cy.get("@callback").should("be.calledWith", defaultValue);
    cy.getByData("step-input-value").should("have.text", defaultValue);
  });
});
