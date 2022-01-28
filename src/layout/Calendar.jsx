import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDateTimePicker from "@mui/lab/DesktopDateTimePicker";
import { TextField } from "@mui/material";

function Calendar({ setTime, disabled }) {
  const [value, setValue] = useState();
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
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default Calendar;
