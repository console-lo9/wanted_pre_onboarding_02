import React from "react";
import ProductPeriodSetup from "components/ProductPeriodSetup";
import stlyes from "./AddNewProduct.module.css";

import { ProductDelivery } from "components/ProductDelivery";
import { ProductBenefit } from "components/ProductBenefit";
import { Etc } from "components/Etc";
function ProductRegistration() {
  return (
    <div className={stlyes.page}>
      <ProductPeriodSetup />
      <div>
        <ProductDelivery />
        <ProductBenefit />
        <Etc />
      </div>
    </div>
  );
}

export default ProductRegistration;
