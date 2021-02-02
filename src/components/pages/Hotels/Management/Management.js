import { Container } from "./styled";
import { forwardRef } from "react";
import useToggle from "hooks/useToggle";

import HotelNameInput from "./HotelNameInput";
import SortTypeSelect from "./SortTypeSelect";
import SearchResults from "./SearchResults";
import FilterMenu from "./FilterMenu";
import CommonButton from "components/common/Button";
import ModalFilterMenu from "./ModalFilterMenu";
import AcceptButton from "./AcceptButton";

const Management = forwardRef((props, ref) => {
  const [isModalOpen, toggleModal] = useToggle();

  return (
    <Container ref={ref}>
      <div className="hotel-name">
        <HotelNameInput />
      </div>
      <div className="sort-type">
        <SortTypeSelect />
      </div>
      <div className="search-results">
        <section>
          <h2 className="hidden">Search results</h2>
          <SearchResults />
        </section>
      </div>
      <div className="filter-menu">
        <aside>
          <h2 className="hidden">Filter menu</h2>
          <FilterMenu />
          <AcceptButton />
        </aside>
      </div>
      <div className="filter-button">
        <CommonButton text="Filter" onClick={toggleModal} />
      </div>
      <ModalFilterMenu toggleModal={toggleModal} isModalOpen={isModalOpen} />
    </Container>
  );
});

export default Management;
