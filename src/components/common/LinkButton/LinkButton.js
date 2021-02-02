import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const CommonLinkButton = ({ text = "Common link", to, className }) => {
  return (
    <LinkButton className={className} to={to}>
      {text}
    </LinkButton>
  );
};

export default CommonLinkButton;

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 8px;
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 1.2rem;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  transition: 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background-color: #ffffff;
    color: #1a1a1a;
    border-color: #1a1a1a;
  }

  &:active {
    background-color: #ebebeb;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;
