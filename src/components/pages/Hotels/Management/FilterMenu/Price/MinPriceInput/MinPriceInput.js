import useGlobalAndLocalState from "hooks/useGlobalAndLocalState";
import { useDispatch, useSelector } from "react-redux";
import { setPrices, selectAbsolutePrices } from "redux/slices/filterParams";

import { TextField } from "@material-ui/core";

const MinPriceInput = () => {
  const dispatch = useDispatch();

  const [absoluteMinPrice, absoluteMaxPrice] = useSelector((state) =>
    selectAbsolutePrices(state)
  );
  const currentMinPrice = useSelector(
    (state) => state.filterParams.prices.currentMinPrice
  );

  const [tempValue, setTempValue] = useGlobalAndLocalState(currentMinPrice);

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
    dispatch(setPrices({ type: "minPrice", currentMinPrice: value }));
  };

  return (
    <TextField
      id="min-price"
      name="min-price"
      label="Min Price"
      variant="outlined"
      value={tempValue}
      onChange={onChange}
      InputProps={{
        onBlur,
      }}
    />
  );
};

export default MinPriceInput;
