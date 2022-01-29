import React, { useContext } from "react";

import Checkbox from "./Checkbox";
import { CategoryContext } from "components/ProductInfo/Category/Contexts";
import SelectedCategory from "./SelectedCategory";

import styles from "./CheckboxCategory.module.css";

const CheckboxCategory = () => {
  const { cateObject } = useContext(CategoryContext);

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        {Object.keys(cateObject).map((key) => {
          return (
            <div key={key}>
              <Checkbox value={key} checked={cateObject[key]} />
              {key}
            </div>
          );
        })}
      </div>
      <div className={styles.selected}>
        {Object.keys(cateObject).map((key) => {
          return (
            <div key={key}>
              <SelectedCategory value={key} checked={cateObject[key]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxCategory;
