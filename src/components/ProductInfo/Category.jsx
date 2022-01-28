import SectionHeader from "layout/Section/SectionHeader";
import SectionWrapper from "layout/Section/SectionWrapper";
import React, { useState } from "react";
import ItemBox from "./ItemBox";

function Category() {
  return (
    <SectionWrapper>
      <SectionHeader children="상품 정보 고시" />
      <ItemBox />
    </SectionWrapper>
  );
}

export default Category;
