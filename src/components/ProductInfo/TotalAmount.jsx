import React from "react";

import styles from "components/ProductInfo/ProductInfo.module.css";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
const TotalAmount = () => {
  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>상품 총 재고</ContentBodyTitle>
      <SectionBodyContent>NN 개</SectionBodyContent>
    </SectionBody>
  );
};

export default TotalAmount;
