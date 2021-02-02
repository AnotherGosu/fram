import styled from "styled-components/macro";

const CommonHero = ({ bgImage }) => {
  return (
    <Container bgImage={bgImage}>
      <p className="title">
        Find your <br />
        own hotel
      </p>
      <p className="advantage">
        Explore the most unusual places of Norway by
        <br /> our hotel service
      </p>
    </Container>
  );
};

export default CommonHero;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: center / cover no-repeat url(${(props) => props.bgImage});
  color: var(--color-white);
  padding-left: 10vw;

  .title {
    font-size: 5em;
    font-weight: 500;
  }

  .advantage {
    font-size: 1.2em;
    opacity: 0.7;
  }

  @media screen and (max-width: 1024px) {
    align-items: center;
    text-align: center;
    padding: 0 25px;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 800px) {
    gap: 10px;
    font-size: 0.65rem;
  }
`;
