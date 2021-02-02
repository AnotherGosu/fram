import styled from "styled-components/macro";
import { footerLinks } from "constants.js";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Links>
      {footerLinks.map((link, index) => (
        <li key={index}>
          <StyledLink to={link.route}>{link.name}</StyledLink>
        </li>
      ))}
    </Links>
  );
};

export default Menu;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-gray);
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;
