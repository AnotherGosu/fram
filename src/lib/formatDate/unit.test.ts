import { formatDate } from ".";

describe("Format date", () => {
  it("should return formatted date string", () => {
    expect(formatDate(new Date("2024-08-14"))).to.equal("Aug 14, 2024");
    expect(formatDate(new Date("1999-05-01"))).to.equal("May 01, 1999");
  });
});
