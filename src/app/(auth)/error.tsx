"use client";

import { RefreshCcw } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/common/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center">
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
