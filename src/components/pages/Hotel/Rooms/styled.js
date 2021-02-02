import styled from "styled-components/macro";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  row-gap: 50px;
  column-gap: 100px;
  margin-top: 50px;
  scroll-margin-top: 200px;

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
