import { Container } from "./styled";

import CommonModal from "components/common/Modal";
import Authorization from "../Authorization";
import Navigation from "../Navigation";

const ModalMenu = ({ toggleModal, isModalOpen }) => {
  return (
    <CommonModal isModalOpen={isModalOpen} toggleModal={toggleModal}>
      <Container>
        <Authorization className="modal-authorization" />
        <Navigation vertical />
      </Container>
    </CommonModal>
  );
};

export default ModalMenu;
