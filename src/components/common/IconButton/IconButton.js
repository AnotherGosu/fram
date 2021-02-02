import styled from "styled-components/macro";
import { IconContext } from "react-icons";

const CommonIconButton = ({
  Icon,
  size = 20,
  color = "#1a1a1a",
  onClick,
  className,
}) => {
  return (
    <IconButton onClick={onClick} className={className} type="button">
      <i style={{ width: `${size}px`, height: `${size}px` }}>
        <IconContext.Provider value={{ size, color }}>
          {Icon}
        </IconContext.Provider>
      </i>
    </IconButton>
  );
};

export default CommonIconButton;

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;
