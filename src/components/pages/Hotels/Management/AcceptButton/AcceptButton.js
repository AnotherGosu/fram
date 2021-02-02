import styled from "styled-components/macro";
import { filterRooms } from "redux/slices/rooms";
import { useDispatch } from "react-redux";

import CommonButton from "components/common/Button";

const AcceptButton = ({ toggleModal }) => {
  const dispatch = useDispatch();

  const onAcceptButtonClick = () => {
    if (toggleModal) toggleModal();
    dispatch(filterRooms());
  };

  return (
    <Container>
      <CommonButton text="Accept" onClick={onAcceptButtonClick} />
    </Container>
  );
};

export default AcceptButton;

const Container = styled.div`
  padding: 15px 25px;
  height: 80px;
  border-top: 1px solid var(--color-gray);
  background-color: var(--color-white);
`;
