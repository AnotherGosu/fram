import useGlobalAndLocalState from "hooks/useGlobalAndLocalState";
import { useDispatch, useSelector } from "react-redux";
import { setPrices, selectAbsolutePrices } from "redux/slices/filterParams";

import { TextField } from "@material-ui/core";

const MaxPriceInput = () => {
  const dispatch = useDispatch();
  const [absoluteMinPrice, absoluteMaxPrice] = useSelector((state) =>
    selectAbsolutePrices(state)
  );
  const currentMaxPrice = useSelector(
    (state) => state.filterParams.prices.currentMaxPrice
  );

  const [tempValue, setTempValue] = useGlobalAndLocalState(currentMaxPrice);

  const onChange = (event) => {
    let value = parseInt(event.target.value, 10);
    value = Number.isNaN(value) ? "" : value;
    setTempValue(value);
  };

  const onBlur = () => {
    let value = tempValue;
    if (value > absoluteMaxPrice) {
      value = absoluteMaxPrice;
      setTempValue(value);
    } else if (value < absoluteMinPrice) {
      value = absoluteMinPrice;
      setTempValue(value);
    }
    dispatch(setPrices({ type: "maxPrice", currentMaxPrice: value }));
  };

  return (
    <TextField
      id="max-price"
      name="max-price"
      label="Max Price"
      variant="outlined"
      value={tempValue}
      onChange={onChange}
      InputProps={{
        onBlur,
      }}
    />
  );
};

export default MaxPriceInput;
