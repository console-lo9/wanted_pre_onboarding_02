import React from "react";
import styles from "components/ProductInfo/ProductInfo.module.css";

const FilterTag = () => {
  return (
    <div className={styles.container}>
      <div>필터 태그</div>
      <div>
        <input type="text"></input>
        <button>검색</button>
      </div>
    </div>
  );
};

export default FilterTag;
