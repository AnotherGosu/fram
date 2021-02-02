import styled from "styled-components/macro";

export const CurrentImage = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 550px;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;

    @media screen and (max-width: 750px) {
      height: 300px;
    }
  }
`;

export const Previews = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 25px;
`;

export const Preview = styled.li`
  display: block;
  width: 75px;
  height: 75px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: var(--transition-main);
  cursor: pointer;

  &:hover {
    border-color: black;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
