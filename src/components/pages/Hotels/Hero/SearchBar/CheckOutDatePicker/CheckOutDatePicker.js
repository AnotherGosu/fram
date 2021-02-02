import { useSelector } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";

import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

const CheckOutDatePicker = ({ customDispatch }) => {
  const checkOutValue = useSelector((state) => state.searchParams.checkOut);

  const onCheckOutChange = (date) => {
    let time = null;
    if (date) time = date.getTime();
    customDispatch("checkOut", time);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        autoOk
        clearable
        disablePast
        disableToolbar
        onChange={onCheckOutChange}
        value={checkOutValue}
        variant="dialog"
        inputVariant="outlined"
        id="check-out"
        label="Check Out"
      />
    </MuiPickersUtilsProvider>
  );
};

export default CheckOutDatePicker;
