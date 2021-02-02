import { Article, Content, Origin, Avatar, Heart } from "./styled";
import { useHistory } from "react-router-dom";

const NewsCard = ({
  title = "",
  summary = "",
  author = "",
  date = "",
  preview = "",
  id = "",
}) => {
  const history = useHistory();

  const fillHeart = (event) => {
    event.target.classList.toggle("filled");
  };

  return (
    <Article bgImage={preview}>
      <div
        className="click-field"
        onClick={() => history.push(`/news/${id}`)}
      />
      <Content>
        <h3>{title}</h3>
        <p className="summary">{summary}</p>
        <div className="footer">
          <Origin>
            <Avatar author={author === "John Doe" ? "man" : "woman"}></Avatar>
            <span className="author">{author}</span>
            <span className="date">{date}</span>
          </Origin>
          <Heart onClick={fillHeart} />
        </div>
      </Content>
    </Article>
  );
};

export default NewsCard;
