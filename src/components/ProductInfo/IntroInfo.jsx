import React, { useState } from "react";

import styles from "components/ProductInfo/ProductInfo.module.css";
const IntroInfo = () => {
  const [info, setInfo] = useState("");
  const onChange = (e) => {
    setInfo(e.target.value);
    console.log(info);
  };
  return (
    <div className={styles.container}>
      <div>상품 구성 소개 정보</div>
      <div>
        <input type="text" name="info" value={info} onChange={onChange} />
      </div>
    </div>
  );
};

export default IntroInfo;
