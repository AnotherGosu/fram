import styled from "styled-components/macro";
import { headerLinks } from "constants.js";

import CommonLink from "components/common/Link";

const Navigation = ({ vertical, className }) => {
  return (
    <Nav className={className}>
      <Links vertical={vertical}>
        {headerLinks.map((link) => (
          <li key={link.name}>
            <CommonLink to={link.path} title={link.name} nav />
          </li>
        ))}
      </Links>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  height: 100%;
`;

const Links = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
`;
