import { DateInput } from ".";

describe("<DateInput />", () => {
  beforeEach(() => {
    cy.viewport("ipad-2");

    cy.mount(
      <DateInput
        callback={cy.stub().as("callback")}
        className="w-[300px]"
        dataTest="date-input"
      />,
    );
  });

  context("Toggle logic", () => {
    it("should toggle component on button click", () => {
      cy.getByData("date-input-content").should("not.exist");

      cy.getByData("date-input-button").click();

      cy.getByData("date-input-content").should("be.visible");

      cy.getByData("date-input-button").click({ force: true });

      cy.getByData("date-input-content").should("not.exist");
    });

    it("should close component on outside click", () => {
      cy.getByData("date-input-button").click();

      cy.getByData("container").click(0, 0, { force: true });

      cy.getByData("date-input-content").should("not.exist");
    });
  });

  context("Select logic", () => {
    it("should select date range", () => {
      cy.getByData("date-input-button").click();

      // Select first date
      cy.getByData("date-input-content").get("[role=gridcell]").first().click();
      cy.get("@callback").should(
        "be.calledWith",
        Cypress.sinon.match({ from: Cypress.sinon.match.date }),
      );

      // Select second date
      cy.getByData("date-input-content").get("[role=gridcell]").last().click();
      cy.get("@callback").should(
        "be.calledWith",
        Cypress.sinon.match({
          from: Cypress.sinon.match.date,
          to: Cypress.sinon.match.date,
        }),
      );
    });
  });
});
