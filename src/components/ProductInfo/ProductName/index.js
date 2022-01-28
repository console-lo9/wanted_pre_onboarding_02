import React, { useState } from "react";
import ProductCode from "./ProductCode";

import styles from "components/ProductInfo/ProductInfo.module.css";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
const ProductName = () => {
  const [inputs, setInputs] = useState({
    product: "",
    code: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const { product } = inputs;

  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>
        <p>상품명</p>
      </ContentBodyTitle>
      <SectionBodyContent>
        <input
          type="text"
          name="product"
          value={product}
          onChange={handleChange}
        />
      </SectionBodyContent>
      <ProductCode product={product} />
    </SectionBody>
  );
};

export default ProductName;
