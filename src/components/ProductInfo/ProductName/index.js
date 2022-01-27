import React, { useState } from "react";
import ProductCode from "./ProductCode";

import styles from "components/ProductInfo/ProductInfo.module.css";
const ProductName = () => {
  const [inputs, setInputs] = useState({
    product: "",
    code: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };
  const { product } = inputs;

  return (
    <div className={styles.container}>
      <div>상품명</div>
      <div>
        <input type="text" name="product" value={product} onChange={onChange} />
      </div>
      <ProductCode />
    </div>
  );
};

export default ProductName;
