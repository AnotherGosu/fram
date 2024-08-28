import { formatPrice } from ".";

describe("Format price", () => {
  it("should return formatted price string", () => {
    expect(formatPrice("200")).to.equal("$200");
  });

  it("should return formatted price string with provided locale", () => {
    expect(formatPrice("200", "nb-NO")).to.equal("200 USD");
  });

  it("should return formatted price string with provided locale and currency", () => {
    expect(formatPrice("200", "nb-NO", "NOK")).to.equal("200 kr");
  });
});
