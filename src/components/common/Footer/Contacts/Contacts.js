import styled from "styled-components/macro";
import { footerContacts } from "constants.js";

const Contacts = () => {
  return (
    <address>
      <Schedule>MO - FR from 10:00 to 18:00</Schedule>
      <List>
        {footerContacts.map((contact) => (
          <li key={contact}>{contact}</li>
        ))}
      </List>
    </address>
  );
};

export default Contacts;

const Schedule = styled.p`
  font-weight: 300;
  opacity: 0.7;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 25px;
`;
