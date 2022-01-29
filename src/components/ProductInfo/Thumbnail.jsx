import React, { useEffect } from "react";

import UploadImages from "components/UploadImages";

import styles from "components/ProductInfo/ProductInfo.module.css";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import AttachImage from "./UploadImage/AttachImage";
import PrintImageName from "./UploadImage/PrintImageName";

import { ImageProvider } from "./UploadImage/Contexts";
const Thumbnail = () => {
  useEffect(() => {
    // console.log(file && file[0].name);
  });
  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>상품 썸네일</ContentBodyTitle>
      <SectionBodyContent className={styles.box}>
        <UploadImages />
        {/* <ImageProvider>
          <AttachImage />
          <PrintImageName />
        </ImageProvider> */}
      </SectionBodyContent>
    </SectionBody>
  );
};

export default Thumbnail;
