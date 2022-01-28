import React, { useState } from "react";
import SectionWrapper from "layout/Section/SectionWrapper";
import SectionHeader from "layout/Section/SectionHeader";

import uuid from "utils/uuid";
import OptionSet from "./OptionSet";

const ProductOptionIdx = () => {
  const [optionSetList, setOptionSetList] = useState([]);

  const onCreate = (targetId, newOption) => {
    const newOptionItem = {
      id: crypto.randomUUID(),
    };

    // 어떤 리스트에 추가할 것인가? => id에 해당하는 값을...
    // 어떤 option을 추가할 것인가?
    setOptionSetList((prev) =>
      prev.map((item) => {
        if (item.id !== targetId) return item; // 원래 아이템을 그대로 둔다!

        // 새로운 after 상태를 만든다!
        return {
          ...item,
          optionList: [...item.optionList, newOption],
        };
      })
    );
  };

  const onDelete = (setId, itemId) => {
    console.log(`${setId}에 있는 ${itemId}가 삭제되었습니다.`);
    setOptionSetList((prev) =>
      prev.map((item) => {
        if (item.id !== setId) return item;

        return {
          ...item,
          optionList: item.optionList.filter((option) => option.id !== itemId),
        };
      })
    );
  };

  const addOptionSet = () => {
    const newOptionList = {
      id: crypto.randomUUID(),
      optionList: [],
    };
    setOptionSetList((prev) => [...prev, newOptionList]);
  };

  return (
    <SectionWrapper>
      <SectionHeader>상품 옵션</SectionHeader>
      <button onClick={addOptionSet}> 옵션 세트 추가</button>

      {optionSetList.map((it) => (
        <OptionSet
          key={it.id}
          onDelete={onDelete}
          onCreate={onCreate}
          optionList={it}
        />
      ))}
    </SectionWrapper>
  );
};

export default ProductOptionIdx;
