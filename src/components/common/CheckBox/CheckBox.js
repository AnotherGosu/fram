import { useDispatch, useSelector } from "react-redux";
import { Checkbox as MuiCheckBox, FormControlLabel } from "@material-ui/core";

const CheckBox = ({
  name = "common-checkbox",
  label = "Common checkbox",
  value = "",
  action,
  selector,
  onChange,
}) => {
  const dispatch = useDispatch();
  const selectedValue = useSelector(selector);

  return (
    <FormControlLabel
      control={
        <MuiCheckBox
          name={name}
          checked={selectedValue !== null ? selectedValue : value}
          onChange={action ? () => dispatch(action()) : onChange}
        />
      }
      label={label}
    />
  );
};

export default CheckBox;
