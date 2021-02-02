import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;
