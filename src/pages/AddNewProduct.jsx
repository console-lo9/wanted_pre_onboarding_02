import ProductOptions from "components/ProductOptions/ProductOptions";
import React from "react";
import style from "../pages/AddNewProduct.module.css";

function ProductRegistration() {
  return (
    <div className={style.container}>
      <ProductOptions />
    </div>
  );
}

export default ProductRegistration;
