import styled from "styled-components/macro";
import { facilitiesIcons } from "constants.js";
import { IconContext } from "react-icons";

const Facilities = ({ facilities }) => {
  return (
    <List>
      <IconContext.Provider value={{ size: "15px", color: "#1a1a1a" }}>
        {facilities.map((facility) => (
          <li key={facility}>
            <i className="icon">{facilitiesIcons[facility]}</i>
            <span className="name">{facility}</span>
          </li>
        ))}
      </IconContext.Provider>
    </List>
  );
};

export default Facilities;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  .name {
    margin-left: 5px;
    text-transform: capitalize;
    opacity: 0.85;
  }
`;
