import React, { useEffect, useRef, useState } from "react";

import UploadImage from "./UploadImage";

import styles from "components/ProductInfo/ProductInfo.module.css";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
const Thumbnail = () => {
  useEffect(() => {
    // console.log(file && file[0].name);
  });
  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>썸네일</ContentBodyTitle>
      <SectionBodyContent className={styles.box}>
        <UploadImage multiple={false} />
      </SectionBodyContent>
    </SectionBody>
  );
};

export default Thumbnail;
