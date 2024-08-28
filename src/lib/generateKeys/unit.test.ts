import { generateKeys } from ".";

describe("Generate keys", () => {
  it("should return array of numbers", () => {
    console.log(generateKeys(5));
    expect(generateKeys(5)).to.deep.eq([0, 1, 2, 3, 4]);
  });

  it("should return array of numbers with starting number", () => {
    expect(generateKeys(3, 1)).to.deep.equal([1, 2, 3]);
  });
});
