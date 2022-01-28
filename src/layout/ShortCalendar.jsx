import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { TextField } from "@mui/material";

function ShortCalendar({ disabled, endTime }) {
  const [value, setValue] = useState();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        disabled={disabled || false}
        value={value}
        inputFormat={"yyyy.MM.dd"}
        mask={"____.__.__"}
        onChange={(newValue) => {
          setValue(newValue);
          if (endTime && endTime > newValue.getTime()) {
            alert("주문 시간 이후로 출고일을 지정해 주세요");
            setValue(value);
          }
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default ShortCalendar;
