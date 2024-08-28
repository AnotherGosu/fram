import { SearchParams } from "@/types/common";

/**
 * Creates query string by joining search parameters together.
 *
 * @param searchParams - key/value object of search params
 * @returns query string
 *
 * @example
 * createQueryString({ page: "1", take: "50" }) // returns "page=1&take=50"
 */
export const createQueryString = (searchParams: SearchParams) => {
  const pairs = Object.entries(searchParams).map(
    ([key, value]) => `${key}=${value}`,
  );

  return pairs.join("&");
};
