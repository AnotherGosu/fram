import { Slider } from ".";

describe("<Slider />", () => {
  it("should mount component and check it's logic", () => {
    const initialValue = 50;
    const step = 10;

    cy.mount(
      <Slider
        defaultValue={[initialValue]}
        callback={cy.stub().as("callback")}
        step={step}
        dataTest="slider"
      />,
    );

    // Chech that thumb's ::after element displays initial value
    cy.getByData("slider-thumb-1").then(($els) => {
      const win = $els[0].ownerDocument.defaultView;

      const after = win?.getComputedStyle($els[0], "after");

      const contentValue = after?.getPropertyValue("content");

      expect(contentValue).to.eq(`"${initialValue}"`);
    });

    // Move slider thumb
    cy.getByData("slider-thumb-1").click({ force: true }).type("{rightarrow}");

    cy.get("@callback").should("be.calledWith", [initialValue + step]);

    // Chech that thumb's ::after element displays updated value
    cy.getByData("slider-thumb-1").then(($els) => {
      const win = $els[0].ownerDocument.defaultView;

      const after = win?.getComputedStyle($els[0], "after");

      const contentValue = after?.getPropertyValue("content");

      expect(contentValue).to.eq(`"${initialValue + step}"`);
    });
  });
});
