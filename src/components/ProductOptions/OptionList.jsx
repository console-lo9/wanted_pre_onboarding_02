import React, { useState } from "react";
import OptionItem from "components/ProductOptions/OptionItem";

const OptionList = ({ onDelete, optionList }) => {
  return (
    <div>
      {optionList.map((option, id) => (
        <OptionItem key={id} {...option} onDelete={onDelete} />
      ))}
    </div>
  );
};

OptionList.defaultProps = {
  optionList: [],
};

export default OptionList;
