/**
 * Formats a price value according to the specified currency and locale.
 *
 * @param value - price value to be formatted
 * @param currency - currency code
 * @param locale - locale string
 * @returns formatted price string
 *
 * @example
 * formatPrice("200") // returns "$200"
 * formatPrice("200", "nb-NO") // returns "200 USD"
 * formatPrice("200", "nb-NO", "NOK") // returns "200 kr"
 */
export const formatPrice = (
  value: string,
  locale: Intl.LocalesArgument = "en-US",
  currency: string = "USD",
): string => {
  const numberValue = Number(value);

  if (Number.isNaN(numberValue)) {
    throw new Error("Provided values is not a number");
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(numberValue);
};
