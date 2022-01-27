import React from "react";

import styles from "components/ProductInfo/ProductInfo.module.css";
const TotalAmount = () => {
  return (
    <div className={styles.container}>
      <div>상품 총 재고</div>
      <div>NN 개</div>
    </div>
  );
};

export default TotalAmount;
