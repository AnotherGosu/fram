import styled from "styled-components/macro";

import CommonIconButton from "components/common/IconButton";

const ArrowButton = styled(CommonIconButton)`
  position: absolute;
  display: flex;
  opacity: 0;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 10px;
  transition: var(--transition-main);
  border-radius: 50%;
  background-color: var(--color-white);
`;

export const LeftArrowButton = styled(ArrowButton)`
  left: 0;
`;

export const RightArrowButton = styled(ArrowButton)`
  right: 0;
`;

export const Container = styled.div`
  width: 100%;
  height: 400px;
  position: relative;

  &:hover ${ArrowButton} {
    opacity: 1;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-fit: center;
    border-radius: 8px;
  }

  @media screen and (max-width: 750px) {
    height: 300px;
  }
`;
