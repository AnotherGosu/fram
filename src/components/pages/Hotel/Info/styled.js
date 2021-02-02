import styled from "styled-components/macro";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 25px;

  .description {
    line-height: 2rem;
    padding-top: 25px;
    border-top: 1px solid var(--color-black);
  }

  h1 {
    font-size: 2rem;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 15px;
  font-size: 1.6rem;
  font-weight: 500;

  .rating {
    min-width: 100px;
  }
`;
