import { Loader } from ".";

describe("<Loader />", () => {
  it("it should mount loader", () => {
    cy.mount(<Loader className="size-8" />);
  });
});
