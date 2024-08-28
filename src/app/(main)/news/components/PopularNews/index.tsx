import { getPopularNews } from "@/api/news";

import { Card } from "./components/Card";

export const PopularNews = async () => {
  const popularNews = await getPopularNews();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {popularNews.map((item) => (
        <Card
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};
