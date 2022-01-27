import React from "react";

import styles from "components/ProductInfo/ProductInfo.module.css";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
const ProductCode = () => {
  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>상품코드</ContentBodyTitle>
      <SectionBodyContent>임시코드</SectionBodyContent>
    </SectionBody>
  );
};

export default ProductCode;
