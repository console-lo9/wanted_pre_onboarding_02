import React from "react";
import Category from "components/ProductInfo/Category";
import FilterTag from "components/ProductInfo/FilterTag";
import IntroInfo from "components/ProductInfo/IntroInfo";
import ProductName from "components/ProductInfo/ProductName";
import RepresentImg from "components/ProductInfo/RepresentImg";
import Thumbnail from "components/ProductInfo/Thumbnail";
import TotalAmount from "components/ProductInfo/TotalAmount";

import { ItemProvider } from "components/ProductInfo/FilterTag/Contexts";
const ProductInfo = () => {
  return (
    <div>
      <Category />
      <ItemProvider>
        <FilterTag />
      </ItemProvider>
      <ProductName />
      <IntroInfo />
      <Thumbnail />
      <RepresentImg />
      <TotalAmount />
    </div>
  );
};

export default ProductInfo;
