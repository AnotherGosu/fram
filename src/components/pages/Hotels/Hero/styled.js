import styled from "styled-components/macro";
import bgImage from "images/search-bg.jpg";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70vh;
  background: center / cover no-repeat url(${bgImage});
  border-radius: 16px;
  color: var(--color-white);
  text-align: center;
  padding: 25px;

  .title {
    font-size: 4em;
    font-weight: 500;
  }

  .advantage {
    font-size: 1.6em;
    margin-top: 10px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 0.6rem;
  }
`;
