import Link from "next/link";

import { SearchParams } from "@/types/common";

import { cn } from "@/utils/cn";

import { Button } from "@/components/common/Button";

import { useComponent } from "./useComponent";

interface PaginationProps {
  searchParams: SearchParams;
}

export const Pagination = async ({ searchParams }: PaginationProps) => {
  const { pages, query, currentPage } = await useComponent(searchParams);

  return (
    <nav
      aria-label="pagination"
      className="mt-6 flex gap-2"
    >
      {pages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "outline"}
          asChild
          isIconSize
          aria-label={`Go to page ${page}`}
          data-test={`pagination-${page}`}
        >
          <Link
            href={{ hash: "hotels", query: { page, ...query } }}
            className={cn({ "pointer-events-none": page === currentPage })}
          >
            {page}
          </Link>
        </Button>
      ))}
    </nav>
  );
};
