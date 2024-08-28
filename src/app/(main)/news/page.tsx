import { Metadata } from "next";
import { Suspense } from "react";

import { News } from "./components/News";
import { NewsFallback } from "./components/NewsFallback";
import { PopularNews } from "./components/PopularNews";
import { PopularNewsFallback } from "./components/PopularNewsFallback";

export const metadata: Metadata = {
  title: "News",
  description: "Find latest news, interesting places and activities",
};

export default function Page() {
  return (
    <>
      <section
        className="mb-16"
        data-test="news-section"
      >
        <h2 className="mb-4 text-xl font-semibold">News</h2>

        <p className="mb-8">
          Find latest news, interesting places and activities
        </p>

        <Suspense fallback={<NewsFallback />}>
          <News />
        </Suspense>
      </section>

      <section data-test="popular-news-section">
        <h2 className="mb-4 text-xl font-semibold">Popular news</h2>

        <p className="mb-8">
          The most valuable pieces of information to make your travelling more
          comfortable
        </p>

        <Suspense fallback={<PopularNewsFallback />}>
          <PopularNews />
        </Suspense>
      </section>
    </>
  );
}
