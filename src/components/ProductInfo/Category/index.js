import React, { useState } from "react";

import CheckboxCategory from "./CheckboxCategory";
import SelectedCategory from "./SelectedCategory";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";

import styles from "components/ProductInfo/ProductInfo.module.css";

import { CategoryProvider } from "./Contexts";
const Category = () => {
  return (
    <SectionBody className={styles.container}>
      <CategoryProvider>
        <ContentBodyTitle>
          <p>카테고리</p>
        </ContentBodyTitle>
        <SectionBodyContent>
          <div className={styles.container}>
            <CheckboxCategory />
            <SelectedCategory />
          </div>
        </SectionBodyContent>
      </CategoryProvider>
    </SectionBody>
  );
};

export default Category;
