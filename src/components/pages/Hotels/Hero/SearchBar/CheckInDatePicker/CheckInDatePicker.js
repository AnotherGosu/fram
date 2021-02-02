import { useSelector } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";

import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

const CheckInDatePicker = ({ customDispatch }) => {
  const checkInValue = useSelector((state) => state.searchParams.checkIn);

  const onCheckInChange = (date) => {
    let time = null;
    if (date) time = date.getTime();
    customDispatch("checkIn", time);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        autoOk
        clearable
        disablePast
        disableToolbar
        onChange={onCheckInChange}
        value={checkInValue}
        variant="dialog"
        inputVariant="outlined"
        id="check-in"
        label="Check In"
      />
    </MuiPickersUtilsProvider>
  );
};

export default CheckInDatePicker;
