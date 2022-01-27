import RadioInput from "layout/Inputs/RadioInput";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import { useState } from "react";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import { setPeriodActions } from "store";
import userSelectionMockData from "utils/product-period-data";

import stylse from "./ProductExposurePeriod.module.css";

const ProductExposurePeriod = () => {
  const dispatch = useDispatch();
  const [isCalendarOpened, setIsCalendarOpened] = useState(false);
  const [newDate, setNewDate] = useState({ date: new Date() });
  const checkedRadio = useSelector((state) => state.exposure.radio);

  const checkSelectionHandler = (e) => {
    dispatch(setPeriodActions.exposureRadio(e.target.value));
  };

  const openCalendarHandler = () => {
    return setIsCalendarOpened(!isCalendarOpened);
  };

  const getDateHandler = (date) => {
    setIsCalendarOpened(false);
    setNewDate({ date: date });
  };

  const userSelectionLists = userSelectionMockData.map((data) => (
    <li key={data.id}>
      <RadioInput
        value={data.selection}
        onChange={checkSelectionHandler}
        checked={checkedRadio === data.selection}
      />
      <p>{data.selection}</p>
    </li>
  ));

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
