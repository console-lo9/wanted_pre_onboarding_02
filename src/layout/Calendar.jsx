import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDateTimePicker from "@mui/lab/DesktopDateTimePicker";
import { TextField } from "@mui/material";

function Calendar({ setTime, startTime, endTime, disabled }) {
  const [value, setValue] = useState();
  // console.log(value.getTime());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateTimePicker
        disabled={disabled || false}
        value={value}
        inputFormat={"yyyy.MM.dd hh:mm"}
        mask={"____.__.__ __:__"}
        onChange={(newValue) => {
          setValue(newValue);
          setTime && setTime(newValue.getTime());
          if (startTime && endTime && startTime > endTime) {
            alert("ads");
            setValue(value);
            return;
          }
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default Calendar;
