import SectionHeader from "layout/Section/SectionHeader";
import SectionWrapper from "layout/Section/SectionWrapper";
import React, { useState } from "react";
import Items from "./Items";

function Category() {
  const [order, setOrder] = useState(1);

  return (
    <SectionWrapper>
      <SectionHeader children={`정보고시 ${order}`} />
      <Items />
    </SectionWrapper>
  );
}

export default Category;
