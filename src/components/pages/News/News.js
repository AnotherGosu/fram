import { AllNewsGrid, PopularNewsGrid, Content } from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, selectAllNews } from "redux/slices/news";

import CommonPageContainer from "components/common/PageContainer";
import NewsCard from "./NewsCard";

const News = () => {
  const dispatch = useDispatch();

  const allNews = useSelector(selectAllNews);
  const popularNews = useSelector((state) => state.news.popularNews);

  useEffect(() => {
    if (!allNews.length) dispatch(fetchNews());
  }, [allNews, dispatch]);

  return (
    <CommonPageContainer slice="news" title="News">
      <Content>
        <section>
          <h2>News</h2>
          <AllNewsGrid>
            {allNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </AllNewsGrid>
        </section>
        <section>
          <h2>Popular</h2>
          <PopularNewsGrid>
            {popularNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </PopularNewsGrid>
        </section>
      </Content>
    </CommonPageContainer>
  );
};

export default News;
