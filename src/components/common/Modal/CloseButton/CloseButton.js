import { GrClose } from "react-icons/gr";
import CommonIconButton from "components/common/IconButton";

const CloseButton = ({ onClick }) => {
  return (
    <CommonIconButton
      Icon={<GrClose />}
      size={20}
      color="#1a1a1a"
      onClick={onClick}
    />
  );
};

export default CloseButton;
