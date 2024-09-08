import { generateKeys } from ".";

describe("Generate keys", () => {
  it("should return array of numbers", () => {
    expect(generateKeys(5)).to.deep.equal([0, 1, 2, 3, 4]);
  });

  it("should return array of numbers with starting number", () => {
    expect(generateKeys(3, 1)).to.deep.equal([1, 2, 3]);
  });
});
