import { NewsFallback } from "./components/NewsFallback";
import { PopularNewsFallback } from "./components/PopularNewsFallback";

export default function Loading() {
  return (
    <>
      <section className="mb-16">
        <h2 className="mb-4 text-xl font-semibold">News</h2>

        <p className="mb-8">
          Find latest news, interesting places and activities
        </p>

        <NewsFallback />
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Popular news</h2>

        <p className="mb-8">
          The most valuable pieces of information to make your travelling more
          comfortable
        </p>

        <PopularNewsFallback />
      </section>
    </>
  );
}
