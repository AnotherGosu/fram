import { useSelector } from "react-redux";

import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const CapacitySelect = ({ customDispatch }) => {
  const capacityValue = useSelector((state) => state.searchParams.capacity);

  const onCapacityChange = (event) => {
    const { value } = event.target;
    customDispatch("capacity", value);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel id="capacity-label">Capacity</InputLabel>
      <Select
        labelId="capacity-label"
        id="capacity-select"
        label="Capacity"
        value={capacityValue}
        onChange={onCapacityChange}
        variant="outlined"
      >
        <MenuItem value={""}>Any</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3+</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CapacitySelect;
