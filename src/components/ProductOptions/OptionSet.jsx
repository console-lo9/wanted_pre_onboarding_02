import React from "react";
import OptionEditor from "components/ProductOptions/OptionEditor";
import OptionList from "components/ProductOptions/OptionList";

const OptionSet = ({ onDelete, onCreate, optionList, deleteOptionSet }) => {
  const clickHandler = () => {
    console.log(`clickHandler${optionList.id}`);
    deleteOptionSet(optionList.id);
    //onDelete()
  };
  return (
    <>
      <button onClick={clickHandler}>삭제</button>
      <OptionEditor onCreate={onCreate} optionListId={optionList.id} />
      <OptionList onDelete={onDelete} {...optionList} />
    </>
  );
};

export default OptionSet;
