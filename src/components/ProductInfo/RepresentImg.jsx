import React from "react";

import styles from "components/ProductInfo/ProductInfo.module.css";
const RepresentImg = () => {
  return (
    <div className={styles.container}>
      <div>상품 대표 이미지</div>
      <div>
        <button>+ 이미지 첨부</button>
      </div>
    </div>
  );
};

export default RepresentImg;
