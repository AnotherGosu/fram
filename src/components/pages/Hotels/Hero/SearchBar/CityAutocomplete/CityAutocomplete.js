import { useState } from "react";
import { useSelector } from "react-redux";
import { cities } from "constants.js";

import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const CityAutocomplete = ({ customDispatch }) => {
  const cityValue = useSelector((state) => state.searchParams.city);

  const [tempCity, setTempCity] = useState(cityValue);

  const onCityChange = (event, newInputValue) => {
    setTempCity(newInputValue);
  };

  const onBlur = () => {
    customDispatch("city", tempCity);
  };

  return (
    <Autocomplete
      id="city-autocomplete"
      freeSolo
      inputValue={tempCity}
      value={tempCity}
      onInputChange={onCityChange}
      options={cities}
      renderInput={(params) => (
        <TextField
          {...params}
          label="City"
          variant="outlined"
          name="city"
          InputProps={{ ...params.InputProps, onBlur }}
        />
      )}
    />
  );
};

export default CityAutocomplete;
