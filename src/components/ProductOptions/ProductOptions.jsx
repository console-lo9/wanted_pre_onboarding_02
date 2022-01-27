import React from "react";
import style from "../ProductOptions/ProductOptions.module.css";
import Input from "layout/Input";
//상품 등록 옵션
const ProductOptions = () => {
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
        />
        <div className={style.inputSmall}>
          <Input
            className={style.inputOptionSmall}
            placeholder={"상품 정상가 (필수)"}
          />
          <p className={style.optionLabel}> 원</p>
          <Input
            className={style.inputOptionSmall}
            placeholder={"상품 판매가 (필수)"}
          />
          <p className={style.optionLabel}>원</p>
          <Input
            className={style.inputOptionSmall}
            placeholder={"재고(필수)"}
          />
          <p className={style.optionLabel}>개</p>
          <select>
            <option>비과세</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
