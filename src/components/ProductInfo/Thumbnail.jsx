import React from "react";

import styles from "components/ProductInfo/ProductInfo.module.css";
const Thumbnail = () => {
  return (
    <div className={styles.container}>
      <div>썸네일</div>
      <div>
        <button>+ 이미지 첨부</button>
      </div>
    </div>
  );
};

export default Thumbnail;
