import { ReviewsFallback } from "./components/ReviewsFallback";

export default function Loading() {
  return (
    <>
      <section>
        <h2 className="mb-4 text-xl font-semibold">Reviews</h2>

        <p className="mb-8">Explore reviews from other travellers</p>

        <ReviewsFallback />
      </section>
    </>
  );
}
