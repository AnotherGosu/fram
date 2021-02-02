import styled from "styled-components/macro";
import noResultImg from "images/no-result.svg";

const NoResult = () => {
  return (
    <Container>
      <img src={noResultImg} alt="Sad face" />
      <p>
        We couldn't find any hotels matching your requests. Please try to change
        search or filter parameters.
      </p>
    </Container>
  );
};

export default NoResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 25px;
  text-align: center;
  font-size: 1.2rem;

  img {
    max-width: 200px;
    max-height: 200px;
  }
`;
