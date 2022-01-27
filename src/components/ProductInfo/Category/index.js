import React, { useState } from "react";

import CheckboxCategory from "./CheckboxCategory";
import SelectedCategory from "./SelectedCategory";

import styles from "components/ProductInfo/ProductInfo.module.css";

import { CategoryProvider } from "./Contexts";
const Category = () => {
  return (
    <div className={styles.container}>
      <CategoryProvider>
        <div>카테고리</div>
        <CheckboxCategory />
        <SelectedCategory />
      </CategoryProvider>
    </div>
  );
};

export default Category;
