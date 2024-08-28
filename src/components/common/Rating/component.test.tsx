import { Rating } from ".";

describe("<Rating />", () => {
  it("should mount correct number of stars", () => {
    const numberOfStars = 3;

    cy.mount(
      <Rating
        rating={numberOfStars}
        data-test="rating"
      />,
    );

    cy.getByData("rating").children().should("have.length", numberOfStars);
  });
});
