import React, { useCallback, useContext } from "react";

import { CategoryContext } from "store/Contexts/Category";
import Button from "layout/Button";
const SelectedCategory = ({ value, checked }) => {
  const { cateObject, setCateObject } = useContext(CategoryContext);

  const onClick = useCallback(
    (e) => {
      let copyObject = { ...cateObject };
      copyObject[value] = !checked;
      setCateObject(copyObject);
    },
    [cateObject, value]
  );
  return (
    checked && (
      <Button onClick={onClick} value={value} tag="deleteButton">
        <p>{value}</p>
        <p>×</p>
      </Button>
    )
  );
};

export default SelectedCategory;
