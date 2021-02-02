import { Container, Detail } from "./styled";
import { IconContext } from "react-icons";
import { AiFillCamera, AiFillVideoCamera } from "react-icons/ai";

const Details = () => {
  return (
    <Container>
      <IconContext.Provider value={{ size: 20, color: "#1a1a1a" }}>
        <Detail>
          <i>
            <AiFillCamera />
          </i>
          <span className="text">30 Photos</span>
        </Detail>
        <Detail>
          <i>
            <AiFillVideoCamera />
          </i>
          <span className="text">4 Videos</span>
        </Detail>
      </IconContext.Provider>
    </Container>
  );
};

export default Details;
