import { SearchParams } from "@/types/common";

import { getHotels } from "@/api/hotels";

import { generateKeys } from "@/lib";

export const useComponent = async (searchParams: SearchParams) => {
  const { totalPages } = await getHotels(searchParams);

  const { page, ...query } = searchParams;

  const currentPage = page ? Number(page) : 1;

  const pages = generateKeys(totalPages, 1);

  return { pages, query, currentPage };
};
