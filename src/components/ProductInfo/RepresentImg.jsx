import React from "react";

import UploadImage from "./UploadImage";

import styles from "components/ProductInfo/ProductInfo.module.css";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
const RepresentImg = () => {
  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>상품 대표 이미지</ContentBodyTitle>
      <SectionBodyContent className={styles.box}>
        <UploadImage multiple={true} />
      </SectionBodyContent>
    </SectionBody>
  );
};

export default RepresentImg;
