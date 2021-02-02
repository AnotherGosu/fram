import { useDispatch, useSelector } from "react-redux";
import { setOptions } from "redux/slices/filterParams";
import { roomTypes } from "constants.js";

import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const RoomTypeSelect = () => {
  const dispatch = useDispatch();
  const typeValue = useSelector((state) => state.filterParams.options.type);

  const onTypeChange = (event) => {
    const { value } = event.target;
    dispatch(setOptions({ name: "type", value }));
  };

  return (
    <FormControl variant="outlined">
      <InputLabel id="type-label">Room type</InputLabel>
      <Select
        labelId="type-label"
        id="type-select"
        label="Room type"
        value={typeValue}
        onChange={onTypeChange}
        variant="outlined"
        MenuProps={MenuProps}
      >
        <MenuItem value={""}>Any</MenuItem>
        {roomTypes.map((type) => (
          <MenuItem value={type} key={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RoomTypeSelect;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
