import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowParams } from "redux/slices/showParams";
import useDebounce from "hooks/useDebounce";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";

import { TextField, InputAdornment } from "@material-ui/core";

const HotelNameInput = () => {
  const dispatch = useDispatch();
  const hotelName = useSelector((state) => state.showParams.hotelName);

  const [tempHotelName, setTempHotelName] = useState(hotelName);

  const onHotelNameChange = (event) => {
    setTempHotelName(event.target.value);
  };

  const debouncedHotelNameChange = useDebounce(tempHotelName, 500);

  useEffect(() => {
    const value = debouncedHotelNameChange.toLowerCase();
    dispatch(setShowParams({ type: "hotelName", value }));
  }, [debouncedHotelNameChange, dispatch]);

  return (
    <TextField
      id="search-specific-name"
      label="Search your hotel"
      variant="outlined"
      value={tempHotelName}
      onChange={onHotelNameChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <i>
              <IconContext.Provider value={{ size: "17px", color: "#1a1a1a" }}>
                <BsSearch />
              </IconContext.Provider>
            </i>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default HotelNameInput;
