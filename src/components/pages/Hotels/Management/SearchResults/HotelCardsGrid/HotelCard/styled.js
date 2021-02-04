import styled from "styled-components/macro";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid transparent;
  transition: var(--transition-main);

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  &:hover {
    border-color: var(--color-black);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const Preview = styled.div`
  height: 250px;
  background: ${(props) => `center / cover no-repeat url(${props.bgImage})`};
  position: relative;
`;

export const Badge = styled.span`
  position: absolute;
  right: 0;
  top: 25px;
  padding: 5px 15px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: var(--color-gray);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 250px);
  gap: 10px;
  background-color: var(--color-gray);
  padding: 15px;
  word-wrap: break-word;

  .location-icon {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;
