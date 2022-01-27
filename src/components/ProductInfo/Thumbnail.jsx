import React from "react";

import styles from "components/ProductInfo/ProductInfo.module.css";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
const Thumbnail = () => {
  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>썸네일</ContentBodyTitle>
      <SectionBodyContent>
        <button>+ 이미지 첨부</button>
      </SectionBodyContent>
    </SectionBody>
  );
};

export default Thumbnail;
