import RadioInput from "layout/Inputs/RadioInput";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import { useState } from "react";
import Calendar from "react-calendar";
import userSelectionMockData from "utils/product-period-data";

import stylse from "./ProductExposurePeriod.module.css";

const ProductExposurePeriod = () => {
  const [isCalendarOpened, setIsCalendarOpened] = useState(false);
  const [newDate, setNewDate] = useState({ date: new Date() });
  const [changeRadio, setChangeRadio] = useState("제한 없음");

  const checkSelectionHandler = (e) => {
    setChangeRadio(e.target.value);
  };

  const openCalendarHandler = () => {
    return setIsCalendarOpened(!isCalendarOpened);
  };

  const userSelectionLists = userSelectionMockData.map((data) => (
    <li key={data.id}>
      <RadioInput
        value={data.selection}
        onChange={checkSelectionHandler}
        checked={changeRadio === data.selection}
      />
      <p>{data.selection}</p>
    </li>
  ));

  const getDateHandler = (date) => {
    setIsCalendarOpened(false);
    setNewDate({ date: date });
  };

  console.log(newDate.date);
  return (
    <SectionBody className={stylse.exposure}>
      <ContentBodyTitle>상품 노출 기한</ContentBodyTitle>
      <SectionBodyContent>
        <ul>{userSelectionLists}</ul>
        <button onClick={openCalendarHandler}>YYYY.MM.DD YY:MM</button>~
        <button onClick={openCalendarHandler}>YYYY.MM.DD YY:MM</button>
        {isCalendarOpened && (
          <Calendar value={newDate.date} onChange={getDateHandler} />
        )}
      </SectionBodyContent>
    </SectionBody>
  );
};

export default ProductExposurePeriod;
