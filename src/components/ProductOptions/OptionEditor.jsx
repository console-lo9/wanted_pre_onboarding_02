import React, { useState } from "react";
import style from "../ProductOptions/ProductOptions.module.css";
import Input from "layout/Input";
//상품 등록 옵션
const OptionEditor = ({ onCreate }) => {
  const [option, setOption] = useState({
    optionName: "",
    price: "",
    salePrice: "",
    stock: 0,
  });

  const handleCreate = () => {
    onCreate();
    alert("추가 성공");
  };

  const handleChangeState = (e) => {
    setOption({
      ...option,
      [e.target.name]: e.target.value,
    });
    console.log(option);
  };

  return (
    <div className={style.optionContainer}>
      <div className={style.imgContainer}>
        <div>이미지 첨부</div>
      </div>
      <button onClick={handleCreate}> + 옵션 추가</button>
    </div>
  );
};

export default OptionEditor;
