import styled from "styled-components/macro";
import { useLocation } from "react-router-dom";

import CommonLinkButton from "components/common/LinkButton";

const BookButton = ({ price, id }) => {
  const location = useLocation();

  return (
    <Container>
      <span>{`From ${price}€ per day`}</span>
      <div>
        <CommonLinkButton text="Book" to={`${location.pathname}/book/${id}`} />
      </div>
    </Container>
  );
};

export default BookButton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
