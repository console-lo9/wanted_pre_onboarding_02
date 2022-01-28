import React, { useState } from "react";
import Items from "./Items";

function ItemBox() {
  const [order, setOrder] = useState(0);
  const [itemList, setItemList] = useState([order]);
  const handleClick = () => {
    setOrder((prev) => prev + 1);
    setItemList((state) => [...state, order]);
  };
  return (
    <div>
      {itemList.map((items, i) => (
        <Items order={i + 1} key={i} />
      ))}
      <button onClick={handleClick}>정보 고시 추가</button>
    </div>
  );
}

export default ItemBox;
