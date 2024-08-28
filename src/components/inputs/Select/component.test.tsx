import { Select } from ".";

const OPTIONS = [
  { label: "Apple", value: "1" },
  { label: "Banana", value: "2" },
  { label: "Pear", value: "3" },
  { label: "Mango", value: "4" },
];

describe("<Select />", () => {
  const groupLabel = "Fruits";
  const placeholder = "Select fruit...";

  beforeEach(() => {
    cy.mount(
      <Select
        options={OPTIONS}
        placeholder="Select fruit..."
        groupLabel="Fruits"
        callback={cy.stub().as("callback")}
        className="w-[200px]"
        dataTest="select"
      />,
    );
  });

  context("Display logic", () => {
    it("should display component with right labels", () => {
      cy.getByData("select-button").should("have.text", placeholder);

      cy.getByData("select-button").click();

      cy.getByData("select-content").contains(groupLabel);
    });

    it("should display component with right options", () => {
      cy.getByData("select-button").click();

      cy.getByData("select-content")
        .get("[role=option]")
        .each(($el, idx) => {
          cy.wrap($el).should("have.text", OPTIONS[idx].label);
        });
    });
  });

  context("Toggle logic", () => {
    it("should toggle component on button click", () => {
      cy.getByData("select-content").should("not.exist");

      cy.getByData("select-button").click();

      cy.getByData("select-content").should("be.visible");

      cy.getByData("select-button").click({ force: true });

      cy.getByData("select-content").should("not.exist");
    });

    it("should close component on outside click", () => {
      cy.getByData("select-button").click();

      cy.getByData("container").click(0, 0, { force: true });

      cy.getByData("select-content").should("not.exist");
    });

    it("should close component on option click", () => {
      cy.getByData("select-button").click();

      cy.getByData("select-content").contains("Apple").click();

      cy.getByData("select-content").should("not.exist");
    });
  });

  context("Select logic", () => {
    it("should select option", () => {
      cy.getByData("select-button").click();

      cy.getByData("select-content").get("[role=option]").first().click();

      cy.get("@callback").should("be.calledWith", OPTIONS[0].value);

      cy.getByData("select-button").should("have.text", OPTIONS[0].label);
    });
  });
});
