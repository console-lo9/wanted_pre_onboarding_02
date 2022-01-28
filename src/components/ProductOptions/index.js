import React, { useState, useRef } from "react";
import SectionWrapper from "layout/Section/SectionWrapper";
import SectionHeader from "layout/Section/SectionHeader";
import OptionEditor from "components/ProductOptions/OptionEditor";
import OptionList from "components/ProductOptions/OptionList";

const ProductOptionIdx = () => {
  const [optionList, setOptionList] = useState([]);
  const dataId = useRef(0);

  const onCreate = () => {
    const newOptionItem = {
      id: dataId.current,
    };
    dataId.current += 1;
    setOptionList([...optionList, newOptionItem]);
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newOptionList = optionList.filter((it) => it.id !== targetId);
    setOptionList(newOptionList);
  };
  return (
    <SectionWrapper>
      <SectionHeader>상품 옵션</SectionHeader>
      <div>
        <OptionEditor onCreate={onCreate} />
        <OptionList onDelete={onDelete} optionList={optionList} />
      </div>
    </SectionWrapper>
  );
};

export default ProductOptionIdx;
