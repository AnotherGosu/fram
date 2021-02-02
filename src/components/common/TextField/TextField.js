import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextField } from "@material-ui/core";

const CommonTextField = ({
  name = "common-field",
  label = "Common Field",
  placeholder = "",
  type = "text",
  autoFocus = false,
  className = "",
  action,
  selector,
}) => {
  const dispatch = useDispatch();
  const initialValue = useSelector(selector ? selector : () => null);

  const [tempValue, setTempValue] = useState(initialValue || "");

  const onChange = (event) => {
    setTempValue(event.target.value);
  };

  const onBlur = () => {
    if (action) dispatch(action(tempValue));
  };

  return (
    <TextField
      id={name}
      name={name}
      label={label}
      placeholder={placeholder}
      type={type}
      variant="outlined"
      autoFocus={autoFocus}
      value={tempValue}
      onChange={onChange}
      InputProps={{ onBlur }}
      className={className}
    />
  );
};

export default CommonTextField;
