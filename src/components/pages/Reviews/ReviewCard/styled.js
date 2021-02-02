import styled from "styled-components/macro";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 25px;

  .description {
    line-height: 2rem;
  }

  .image-link {
    flex-basis: 50px;
    flex-grow: 1;
    border-radius: 8px;
    overflow: hidden;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  height: 200px;
  gap: 15px;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: center / cover no-repeat url(${(props) => props.bgImage});
  border-radius: 8px;
  flex-basis: 50px;
  flex-grow: 3;
`;

export const LeftImage = styled(Image)`
  flex-grow: 1;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const RightImage = styled.div`
  height: 100%;
  background: center / cover no-repeat url(${(props) => props.bgImage});
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: center / cover no-repeat url(${(props) => props.bgImage});
    transition: var(--transition-main);
    z-index: 1;
  }

  &::after {
    content: "+14";
    display: flex;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    font-size: 1.6rem;
    color: var(--color-white);
    font-weight: 500;
    transition: var(--transition-main);
    z-index: 2;
  }

  &:hover {
    &::before {
      transform: scale(1.1);
    }

    &::after {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;
