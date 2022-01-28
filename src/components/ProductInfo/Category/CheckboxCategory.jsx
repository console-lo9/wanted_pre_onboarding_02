import React, { useContext, useEffect, useState } from "react";

import Checkbox from "./Checkbox";
import { CategoryContext } from "components/ProductInfo/Category/Contexts";

const CheckboxCategory = () => {
  const { categories, checkedItems, checkList } = useContext(CategoryContext);

  return (
    <div>
      {categories.map((cate, index) => {
        return (
          <div key={index}>
            <Checkbox value={cate} key={index} />
            {cate}
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxCategory;
