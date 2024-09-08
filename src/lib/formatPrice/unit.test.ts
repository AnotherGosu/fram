import { formatPrice } from ".";

describe("Format price", () => {
  it("should return formatted price string", () => {
    expect(formatPrice("200")).to.equal("$200.00");
  });

  it("should return formatted price string with decimal part", () => {
    expect(formatPrice("200.52")).to.equal("$200.52");
  });

  it("should return formatted price string with provided locale", () => {
    expect(formatPrice("200", "nb-NO")).to.equal("200,00 USD");
  });

  it("should return formatted price string with provided locale and currency", () => {
    expect(formatPrice("200", "nb-NO", "NOK")).to.equal("200,00 kr");
  });
});
