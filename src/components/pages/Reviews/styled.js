import styled from "styled-components/macro";

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  column-gap: 50px;
  row-gap: 100px;
  margin-top: 50px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
