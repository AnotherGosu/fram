import styled from "styled-components/macro";

export const ReviewsGrid = styled.div`
  display: grid;
  column-gap: 50px;
  row-gap: 100px;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  margin-top: 50px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
