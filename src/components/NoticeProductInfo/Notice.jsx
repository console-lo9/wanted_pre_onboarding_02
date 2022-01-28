import SectionHeader from "layout/Section/SectionHeader";
import SectionWrapper from "layout/Section/SectionWrapper";
import React from "react";
import ItemBox from "./ItemBox";

function Notice() {
  return (
    <SectionWrapper>
      <SectionHeader children="상품 정보 고시" />
      <ItemBox />
    </SectionWrapper>
  );
}

export default Notice;
