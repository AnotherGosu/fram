import styled from "styled-components/macro";
import avatarMan from "images/avatar-man.jpg";
import avatarWoman from "images/avatar-woman.jpg";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  .click-field {
    cursor: pointer;
    width: 100%;
    flex-grow: 2;
  }

  &::before,
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::before {
    background: center / cover no-repeat url(${(props) => props.bgImage});
    z-index: -2;
    transition: var(--transition-main);
  }

  &::after {
    background: rgba(0, 0, 0, 0.35);
    z-index: -1;
  }

  &:hover::before {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 15px;
  color: #ffffff;
  padding: 0 35px 35px 35px;

  .summary {
    font-weight: 300;
    opacity: 0.8;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) =>
    props.author === "man" ? `url(${avatarMan})` : `url(${avatarWoman})`};
  align-self: center;
`;

export const Origin = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-areas:
    "avatar author"
    "avatar date";
  column-gap: 10px;
  align-items: center;
  font-size: 0.8rem;

  ${Avatar} {
    grid-area: avatar;
  }

  .author {
    grid-area: author;
  }

  .date {
    grid-area: date;
    font-weight: 300;
    opacity: 0.8;
  }
`;

export const Heart = styled.div`
  background-color: var(--color-white);
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 10px;
  position: relative;
  top: 0;
  cursor: pointer;
  transform: rotate(-45deg);
  transition: 0.3s ease;

  &:before,
  &:after {
    content: "";
    background-color: var(--color-white);
    border-radius: 50%;
    height: 15px;
    position: absolute;
    width: 15px;
    transition: 0.3s ease;
  }

  &:before {
    top: -10px;
    left: 0;
  }

  &:after {
    left: 10px;
    top: 0;
  }

  &.filled {
    background-color: var(--color-black);

    &::before,
    &::after {
      background-color: var(--color-black);
    }
  }
`;
