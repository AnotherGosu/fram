import { Container, Designer, Socials, Policies } from "./styled";
import { IconContext } from "react-icons";
import { footerSocials, footerPolicies } from "constants.js";

const Credits = () => {
  return (
    <Container>
      <span className="logo">Fram</span>
      <Designer
        href="https://www.behance.net/gallery/101008359/Travelly-Booking-Hotel-UXUI"
        target="_blank"
        rel="noopener noreferrer"
      >
        © 2020 Designed by Danil Kozlov
      </Designer>
      <Socials>
        <IconContext.Provider value={{ size: "20px", color: "#ebebeb" }}>
          {footerSocials.map((social) => (
            <li key={social.url}>
              <a href={social.url}>
                <i>{social.icon}</i>
              </a>
            </li>
          ))}
        </IconContext.Provider>
      </Socials>
      <Policies>
        {footerPolicies.map((policy) => (
          <li key={policy.title}>
            <a href={policy.url}>{policy.title}</a>
          </li>
        ))}
      </Policies>
    </Container>
  );
};

export default Credits;
