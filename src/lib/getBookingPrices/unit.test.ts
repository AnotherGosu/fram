import { getBookingPrices } from ".";

describe("Get booking prices", () => {
  it("should return booking prices according to provided accommodation price", () => {
    const accommodationPrice = 75;
    const vat = 7.5;
    const serviceFee = 11.25;
    const total = 93.75;

    expect(getBookingPrices(accommodationPrice)).to.deep.equal({
      vat,
      serviceFee,
      total,
    });
  });
});
