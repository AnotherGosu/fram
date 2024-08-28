import { getNews } from "@/api/news";

import { Card } from "./components/Card";

export const News = async () => {
  const news = await getNews();

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {news.map((item) => (
        <Card
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};
