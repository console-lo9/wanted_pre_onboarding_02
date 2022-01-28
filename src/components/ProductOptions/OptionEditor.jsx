import React, { useState } from "react";
import style from "components/ProductOptions/ProductOptions.module.css";
import Input from "layout/Input";
import UploadForm from "./UploadForm";
//상품 등록 옵션
const OptionEditor = ({ onCreate }) => {
  const handleCreate = () => {
    onCreate();
    alert("추가 성공");
  };

  return (
    <div className={style.optionContainer}>
      <div className={style.imgContainer}>
        <UploadForm />
      </div>
      <button onClick={handleCreate}> + 옵션 추가</button>
    </div>
  );
};

export default OptionEditor;
