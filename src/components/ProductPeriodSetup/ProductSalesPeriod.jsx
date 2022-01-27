import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import RadioInput from "layout/Inputs/RadioInput";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPeriodActions } from "store";

const userSelectionMockData = [
  { id: 1, selection: "제한 없음" },
  { id: 2, selection: "미판매" },
  { id: 3, selection: "판매 기간 설정" },
];

const ProductSalsePeriod = () => {
  const dispatch = useDispatch();
  const changedRadio = useSelector((state) => state.sales.radio);

  const checkSelectionHandler = (e) => {
    dispatch(setPeriodActions.salesRadio(e.target.value));
  };

  console.log(changedRadio);
  const userSelectionLists = userSelectionMockData.map((data) => (
    <li key={data.id}>
      <RadioInput
        value={data.selection}
        onChange={checkSelectionHandler}
        checked={changedRadio === data.selection}
      />
      <p>{data.selection}</p>
    </li>
  ));

  return (
    <SectionBody>
      <ContentBodyTitle>상품 판매 기한</ContentBodyTitle>
      <SectionBodyContent>
        <ul>{userSelectionLists}</ul>
      </SectionBodyContent>
    </SectionBody>
  );
};

export default ProductSalsePeriod;
