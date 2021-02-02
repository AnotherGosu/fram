import { useDispatch, useSelector } from "react-redux";
import { setShowParams } from "redux/slices/showParams";

import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const SortTypeSelect = () => {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.showParams.sortType);

  const changeSortType = (event) =>
    dispatch(setShowParams({ type: "sortType", value: event.target.value }));

  return (
    <FormControl variant="outlined">
      <InputLabel id="sort-label">Sort by</InputLabel>
      <Select
        labelId="sort-label"
        id="sort-select"
        label="Sort by"
        variant="outlined"
        value={sortType}
        onChange={changeSortType}
      >
        <MenuItem value="popularity">Popularity</MenuItem>
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortTypeSelect;
