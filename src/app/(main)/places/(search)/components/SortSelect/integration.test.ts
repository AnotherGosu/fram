import { SORT_OPTIONS } from "@/constants/options";

describe("Sort Select", () => {
  beforeEach(() => {
    cy.visit("/places?search=Oslo");
  });

  it("should display sort options", () => {
    cy.getByData("sort-button").click();

    SORT_OPTIONS.forEach(({ label }) => {
      cy.getByData("sort-content").contains(label);
    });
  });

  it("should update 'sort' search param, navigate to first page and preserve other search params", () => {
    cy.getByData("sort-button").click();

    cy.getByData("sort-content").contains(SORT_OPTIONS[0].label).click();

    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "search=Oslo")
      .and("contain", `sort=${SORT_OPTIONS[0].value}`);
  });
});
