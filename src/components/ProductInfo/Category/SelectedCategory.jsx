import React, { useContext, useEffect } from "react";

import { CategoryContext } from "components/ProductInfo/Category/Contexts";

import Button from "layout/Button";
import styles from "./SelectedCategory.module.css";
const SelectedCategory = () => {
  const { checkedItems, checkedItemHandler } = useContext(CategoryContext);

  const onClick = (e) => {
    checkedItemHandler(e.target.value, false);
  };

  return (
    <div>
      {checkedItems.length ? (
        checkedItems.map((cate, index) => {
          return (
            <div className={styles.selectedContainer} key={index}>
              <p>{cate} </p>
              <Button onClick={onClick} value={cate} tag="xBadge">
                ×
              </Button>
            </div>
          );
        })
      ) : (
        <p>카테고리를 지정해 주세요</p>
      )}
    </div>
  );
};

export default SelectedCategory;
