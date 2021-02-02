import useGlobalAndLocalState from "hooks/useGlobalAndLocalState";
import { useDispatch, useSelector } from "react-redux";
import { setPrices } from "redux/slices/filterParams";

import { Slider } from "@material-ui/core";

const PriceSlider = () => {
  const dispatch = useDispatch();
  const {
    absoluteMinPrice,
    absoluteMaxPrice,
    currentMinPrice,
    currentMaxPrice,
  } = useSelector((state) => state.filterParams.prices);

  const [tempValue, setTempValue] = useGlobalAndLocalState([
    currentMinPrice,
    currentMaxPrice,
  ]);

  const onChange = (event, newValue) => {
    setTempValue(newValue);
  };

  const onChangeCommited = () => {
    dispatch(
      setPrices({
        currentMinPrice: tempValue[0],
        currentMaxPrice: tempValue[1],
      })
    );
  };

  return (
    <Slider
      value={tempValue}
      onChange={onChange}
      onChangeCommitted={onChangeCommited}
      valueLabelDisplay="auto"
      min={absoluteMinPrice}
      max={absoluteMaxPrice}
    />
  );
};

export default PriceSlider;
