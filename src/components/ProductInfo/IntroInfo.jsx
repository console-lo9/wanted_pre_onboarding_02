import React, { useState } from "react";

import styles from "components/ProductInfo/ProductInfo.module.css";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
const IntroInfo = () => {
  const [info, setInfo] = useState("");
  const onChange = (e) => {
    setInfo(e.target.value);
    console.log(info);
  };
  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>상품 구성 소개 정보</ContentBodyTitle>
      <SectionBodyContent>
        <input type="text" name="info" value={info} onChange={onChange} />
      </SectionBodyContent>
    </SectionBody>
  );
};

export default IntroInfo;
