import styled from "styled-components/macro";
import React from "react";

import FilterMenu from "../FilterMenu";
import CommonModal from "components/common/Modal";
import AcceptButton from "../AcceptButton";

const ModalFilterMenu = ({ toggleModal, isModalOpen }) => {
  return (
    <CommonModal isModalOpen={isModalOpen} toggleModal={toggleModal}>
      <ModalContainer>
        <aside>
          <h2 className="hidden">Filter menu</h2>
          <MenuContainer>
            <FilterMenu />
          </MenuContainer>
          <AcceptButton toggleModal={toggleModal} />
        </aside>
      </ModalContainer>
    </CommonModal>
  );
};

export default React.memo(ModalFilterMenu);

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const MenuContainer = styled.div`
  padding: 25px 100px;

  @media screen and (max-width: 750px) {
    padding: 25px 50px;
  }

  @media screen and (max-width: 450px) {
    padding: 25px;
  }
`;
