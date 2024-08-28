import { Metadata } from "next";
import { Suspense } from "react";

import { Reviews } from "./components/Reviews";
import { ReviewsFallback } from "./components/ReviewsFallback";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Explore reviews from other travellers",
};

export default function Page() {
  return (
    <>
      <section data-test="reviews-section">
        <h2 className="mb-4 text-xl font-semibold">Reviews</h2>

        <p className="mb-8">Explore reviews from other travellers</p>

        <Suspense fallback={<ReviewsFallback />}>
          <Reviews />
        </Suspense>
      </section>
    </>
  );
}
