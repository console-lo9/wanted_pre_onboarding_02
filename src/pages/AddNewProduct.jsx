import React from "react";

import { ProductDelivery } from "components/ProductDelivery";
import { ProductBenefit } from "components/ProductBenefit";
import { Etc } from "components/Etc";
function ProductRegistration() {
  return (
    <div>
      <ProductDelivery />
      <ProductBenefit />
      <Etc />
    </div>
  );
}

export default ProductRegistration;
