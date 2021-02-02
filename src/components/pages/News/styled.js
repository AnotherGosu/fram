import styled from "styled-components/macro";

const Grid = styled.div`
  display: grid;
  gap: 50px;
  margin-top: 50px;

  @media screen and (max-width: 790px) {
    grid-template-columns: 1fr !important;
    grid-auto-rows: 400px !important;
  }
`;

export const AllNewsGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-auto-rows: 450px;
`;

export const PopularNewsGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: 600px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
