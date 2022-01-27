import RadioInput from "layout/Inputs/RadioInput";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import { useRef, useState } from "react";
import Calendar from "react-calendar";
import Days from "react-calendar/dist/umd/MonthView/Days";

import stylse from "./ProductExposurePeriod.module.css";

const userSelectionMockData = [
  { id: 1, selection: "제한 없음" },
  { id: 2, selection: "미노출" },
  { id: 3, selection: "노출 기간 설정" },
];

const ProductExposurePeriod = () => {
  const [isCalendarOpened, setIsCalendarOpened] = useState(false);
  const [newDate, setNewDate] = useState({ date: new Date() });

  const openCalendarHandler = () => {
    return setIsCalendarOpened(!isCalendarOpened);
  };
  const userSelectionLists = userSelectionMockData.map((data) => (
    <li key={data.id}>
      <RadioInput />
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
      <ContentBodyTitle>
        <p>상품 노출 기한</p>
      </ContentBodyTitle>
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
