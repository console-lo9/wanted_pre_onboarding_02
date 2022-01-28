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
      <div className={style.optionContents}>
        <button className={style.optionBtn}>삭제</button>
        <Input
          className={style.inputOption}
          placeholder={"옵션명을 입력해 주세요. (필수)"}
          name="optionName"
          value={option.optionName}
          onChange={handleChangeState}
        />
        <div className={style.inputSmall}>
          <Input
            className={style.inputOptionSmall}
            placeholder={"상품 정상가 (필수)"}
            name="price"
            value={option.price}
            onChange={handleChangeState}
          />
          <p className={style.optionLabel}> 원</p>
          <Input
            className={style.inputOptionSmall}
            placeholder={"상품 판매가 (필수)"}
            name="salePrice"
            value={option.salePrice}
            onChange={handleChangeState}
          />
          <p className={style.optionLabel}>원</p>
          <Input
            className={style.inputOptionSmall}
            placeholder={"재고(필수)"}
            name="stock"
            value={option.stock}
            onChange={handleChangeState}
          />
          <p className={style.optionLabel}>개</p>
          <select>
            <option>비과세</option>
            <option>과세</option>
          </select>
        </div>
      </div>
      <button onClick={handleCreate}> + 옵션 추가</button>
    </div>
  );
};

export default OptionEditor;
