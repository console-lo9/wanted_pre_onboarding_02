import React, { useContext, useEffect } from "react";

import { CategoryContext } from "components/ProductInfo/Category/Contexts";

const SelectedCategory = () => {
  const { checkedItems, checkedItemHandler } = useContext(CategoryContext);

  const onClick = (e) => {
    checkedItemHandler(e.target.value, false);
  };

  return (
    <div>
      {checkedItems.length ? (
        checkedItems.map((cate, index) => {
          return (
            <div key={index}>
              {cate}{" "}
              <button onClick={onClick} value={cate}>
                X
              </button>
            </div>
          );
        })
      ) : (
        <p>카테고리를 지정해 주세요</p>
      )}
    </div>
  );
};

export default SelectedCategory;
