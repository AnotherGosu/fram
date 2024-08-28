import { TextInput } from ".";

describe("<TextInput />", () => {
  it("should render component and check it's logic", () => {
    const value = "Email";

    cy.mount(<TextInput className="w-[300px]" />);

    cy.get("input").type(value);
    cy.get("input").should("have.value", value);
  });
});
