import RadioInput from "layout/Inputs/RadioInput";
import { useState } from "react";
import Calendar from "react-calendar";

const userSelectionMockData = [
  { id: 1, selection: "제한 없음" },
  { id: 2, selection: "미노출" },
  { id: 3, selection: "노출 기간 설정" },
];

const ProductExposurePeriod = () => {
  const [isCalendarOpened, setIsCalendarOpened] = useState(false);
  const openCalendarHandler = () => {
    return setIsCalendarOpened(!isCalendarOpened);
  };
  const userSelectionLists = userSelectionMockData.map((data) => (
    <li key={data.id}>
      <RadioInput />
      <p>{data.selection}</p>
    </li>
  ));
  return (
    <div>
      <div>
        <b>상품노출 기한</b>
      </div>
      <ul>{userSelectionLists}</ul>
      <button onClick={openCalendarHandler}>YYYY.MM.DD YY:MM</button>~
      <button onClick={openCalendarHandler}>YYYY.MM.DD YY:MM</button>
      <div>{isCalendarOpened && <Calendar />}</div>
    </div>
  );
};

export default ProductExposurePeriod;
