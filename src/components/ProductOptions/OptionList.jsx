import React, { useRef, useState } from "react";
import OptionItem from "components/ProductOptions/OptionItem";

const OptionList = ({ onDelete, optionList }) => {
  const [optionProduct, setOptionProduct] = useState([]);

  const dataId = useRef(0);

  const addOptionProduct = (targetId) => {
    const testID = optionList.filter((it) => it.id === targetId);

    console.log("optionList", optionList);
    const newOptionProduct = {
      id: dataId.current,
    };
    dataId.current += 1;
    // const newOptionProduct = optionProduct.filter(
    //   (it) => it.id === optionList.targetId
    // );
    setOptionProduct([...optionProduct, newOptionProduct]);
    console.log(optionProduct);
  };

  return (
    <div>
      {optionList.map((option, id) => (
        <OptionItem
          key={id}
          {...option}
          onDelete={onDelete}
          addOptionProduct={addOptionProduct}
          optionProduct={optionProduct}
        />
      ))}
    </div>
  );
};

OptionList.defaultProps = {
  optionList: [],
};

export default OptionList;
