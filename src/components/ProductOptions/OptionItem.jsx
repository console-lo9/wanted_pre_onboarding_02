import React, { useState } from "react";
import style from "../ProductOptions/ProductOptions.module.css";
import Input from "layout/Input";
import PlusOption from "./PlusOption";

const OptionItem = ({ onDelete, id }) => {
  const [optionProduct, setOptionProduct] = useState([]);

  const addOptionProduct = () => {
    const newOptionProduct = {
      id: crypto.randomUUID(),
    };
    setOptionProduct([...optionProduct, newOptionProduct]);
  };

  const deleteOption = (targetId) => {
    console.log(`${id}가 삭제되었습니다.`);
    console.log(targetId);
    const newOptionProduct = optionProduct.filter((it) => it.id !== targetId);
    setOptionProduct(newOptionProduct);
  };

  const [option, setOption] = useState({
    optionId: id,
    optionName: "",
    price: "",
    salePrice: "",
    stock: 0,
  });

  const handleChangeState = (e) => {
    setOption({
      ...option,
      [e.target.name]: e.target.value,
    });
    console.log(option);
  };

  const salesPercent = Math.floor(
    ((option.price - option.salePrice) / option.price) * 100
  );

  return (
    <div className={style.optionContents}>
      <button className={style.optionBtn} onClick={() => onDelete(id)}>
        삭제
      </button>
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
        {salesPercent > 0 && salesPercent !== 100 ? (
          <div>{salesPercent}%</div>
        ) : (
          ""
        )}
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
      <div>
        {optionProduct.map((it, idx) => (
          <PlusOption
            key={option.id}
            deleteOption={() => deleteOption(it.id)}
          />
        ))}
      </div>
      <button onClick={addOptionProduct}>추가 옵션 상품 추가</button>
    </div>
  );
};

export default OptionItem;
