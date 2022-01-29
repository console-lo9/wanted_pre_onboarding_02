import React, { useContext } from "react";

import { CategoryContext } from "components/ProductInfo/Category/Contexts";

import styles from "./SelectedCategory.module.css";
import Button from "layout/Button";
const SelectedCategory = ({ value, checked }) => {
  const { cateObject, setCateObject } = useContext(CategoryContext);

  const onClick = (e) => {
    let copyObject = { ...cateObject };
    copyObject[value] = !checked;
    setCateObject(copyObject);
  };
  return (
    <div className={!checked ? styles.notChecked : 0}>
      {value}{" "}
      <Button onClick={onClick} value={value} tag="xBadge">
        ×
      </Button>
    </div>
  );
};

export default SelectedCategory;
