import { SERVICE_FEE, VAT } from "@/constants/common";

/**
 * Get booking prices according to provided accommodation price
 *
 * @example
 * // returns { vat: 7.5, serviceFee: 11.25, total: 93.75 }
 * getBookingPrices(75)
 *
 */
export const getBookingPrices = (
  accommodationPrice: number,
): { vat: number; serviceFee: number; total: number } => {
  const vat = accommodationPrice * VAT;
  const serviceFee = accommodationPrice * SERVICE_FEE;
  const total = accommodationPrice + vat + serviceFee;

  return { vat, serviceFee, total };
};
