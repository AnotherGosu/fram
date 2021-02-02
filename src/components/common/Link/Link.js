import styled, { css } from "styled-components/macro";
import { Link, NavLink } from "react-router-dom";

const CommonLink = ({ to, title, className, nav }) => {
  return nav ? (
    <StyledNavLink className={className} to={to} activeClassName="active">
      {title}
    </StyledNavLink>
  ) : (
    <StyledLink className={className} to={to}>
      {title}
    </StyledLink>
  );
};

export default CommonLink;

export const commonLinkStyles = css`
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.2rem;
  position: relative;
  transition: 0.3s ease;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 0;
    height: 2px;
    background: #1a1a1a;
    transition: 0.3s ease;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 50%;
  }
`;

const StyledLink = styled(Link)`
  ${commonLinkStyles}
`;

const StyledNavLink = styled(NavLink)`
  ${commonLinkStyles}
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;

    &::before,
    &::after {
      display: none;
    }
  }
`;
