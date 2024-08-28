describe("Filters", () => {
  beforeEach(() => {
    cy.visit("/places?sort=2");
  });

  it("should update 'price' search param, navigate to first page and preserve other search params", () => {
    // Move left thumb of slider
    cy.getByData("price-filter-thumb-1")
      .click({ force: true })
      .type("{rightarrow}");

    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "sort=2")
      .and("match", /price=(\d,?)+/);
  });

  it("should update 'rating' search param, navigate to first page and preserve other search params", () => {
    // Click on first start of rating
    cy.getByData("rating-filter").find("button").first().click();
    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "sort=2")
      .and("match", /rating=\d/);

    // Click on last start of rating
    cy.getByData("rating-filter").find("button").last().click();
    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "sort=2")
      .and("match", /rating=\d/);

    // Click on first start of rating again
    cy.getByData("rating-filter").find("button").last().click();
    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "sort=2")
      .and("not.contain", "rating");
  });

  it("should update 'beds' search param, navigate to first page and preserve other search params", () => {
    // Increment filter
    cy.getByData("beds-filter-increment").click();
    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "sort=2")
      .and("match", /beds=\d+/);

    // Decrement filter
    cy.getByData("beds-filter-decrement").click();
    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "sort=2")
      .and("not.contain", "beds");
  });

  it("should update 'rooms' search param, navigate to first page and preserve other search params", () => {
    // Increment filter
    cy.getByData("rooms-filter-increment").click();
    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "sort=2")
      .and("match", /rooms=\d+/);

    // Decrement filter
    cy.getByData("rooms-filter-decrement").click();
    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "sort=2")
      .and("not.contain", "rooms");
  });

  it("should update 'facilities' search param, navigate to first page and preserve other search params", () => {
    // Check first option
    cy.getByData("facilities-filter").find("input").first().check();
    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "sort=2")
      .and("match", /facilities=(\d,?)+/);

    // Check last option
    cy.getByData("facilities-filter").find("input").last().check();
    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "sort=2")
      .and("match", /facilities=(\d,?)+/);

    // Uncheck all options
    cy.getByData("facilities-filter").find("input").first().uncheck();
    cy.getByData("facilities-filter").find("input").last().uncheck();
    cy.location("search")
      .should("contain", "page=1")
      .and("contain", "sort=2")
      .and("not.contain", "facilities");
  });
});
