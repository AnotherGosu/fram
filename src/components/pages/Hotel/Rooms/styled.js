import styled from "styled-components/macro";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 50px;
  margin-top: 50px;
  scroll-margin-top: 200px;

  @media screen and (max-width: 1465px) {
    grid-template-columns: 1fr;
  }
`;
