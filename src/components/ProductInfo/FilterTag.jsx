import React from "react";
import styles from "components/ProductInfo/ProductInfo.module.css";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";

const FilterTag = () => {
  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>
        <p>필터 태그</p>
      </ContentBodyTitle>
      <SectionBodyContent>
        <input type="text"></input>
        <button>검색</button>
      </SectionBodyContent>
    </SectionBody>
  );
};

export default FilterTag;
