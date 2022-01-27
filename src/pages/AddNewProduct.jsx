import React from "react";
import ProductPeriodSetup from "components/ProductPeriodSetup";
import stlyes from "./AddNewProduct.module.css";

function ProductRegistration() {
  return (
    <div className={stlyes.page}>
      <ProductPeriodSetup />
    </div>
  );
}

export default ProductRegistration;
