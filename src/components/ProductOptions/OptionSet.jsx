import React, { useState } from "react";
import OptionEditor from "components/ProductOptions/OptionEditor";
import OptionList from "components/ProductOptions/OptionList";
import uuid from "utils/uuid";

const OptionSet = ({ onDelete, onCreate, optionList }) => {
  return (
    <>
      <OptionEditor onCreate={onCreate} optionListId={optionList.id}/>
      <OptionList onDelete={onDelete} {...optionList} />
    </>
  );
};

export default OptionSet;
