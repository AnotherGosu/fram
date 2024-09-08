"use client";

import { RefreshCcw } from "lucide-react";

import { Button } from "@/components/common/Button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h2 className="mb-4 text-lg font-semibold">Something went wrong...</h2>

      <Button
        onClick={() => reset()}
        className="w-max"
      >
        <RefreshCcw />
        Try again
      </Button>
    </div>
  );
}
