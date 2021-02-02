import { Form } from "./styled";
import { fetchHotels } from "redux/slices/hotels";
import { setSearchParam } from "redux/slices/searchParams";
import { useDispatch } from "react-redux";

import CityAutocomplete from "./CityAutocomplete";
import CheckInDatePicker from "./CheckInDatePicker";
import CheckOutDatePicker from "./CheckOutDatePicker";
import CapacitySelect from "./CapacitySelect";
import CommonTextButton from "components/common/Button";

const SearchBar = () => {
  const dispatch = useDispatch();

  const customDispatch = (param, value) => {
    dispatch(setSearchParam({ param, value }));
  };

  return (
    <Form>
      <div className="city">
        <CityAutocomplete customDispatch={customDispatch} />
      </div>
      <div className="check-in">
        <CheckInDatePicker customDispatch={customDispatch} />
      </div>
      <div className="check-out">
        <CheckOutDatePicker customDispatch={customDispatch} />
      </div>
      <div className="capacity">
        <CapacitySelect customDispatch={customDispatch} />
      </div>
      <div className="search-button">
        <CommonTextButton text="Search" action={fetchHotels} />
      </div>
    </Form>
  );
};

export default SearchBar;
