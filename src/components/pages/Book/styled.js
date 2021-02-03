import styled from "styled-components/macro";

export const DataInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  column-gap: 100px;
  row-gap: 50px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 50px;
  }
`;
