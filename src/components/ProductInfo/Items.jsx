import AddButton from "layout/Button";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import styles from "./Items.module.css";
import NewItem from "./NewItem";

function Items({ order }) {
  const [labelArr, setLabelArr] = useState([
    "제품명 / 중량",
    "원산지 / 원재료 함량",
    "등급",
    "보관",
    "식품 유형",
  ]);
  const [placeHolderArr, setPlaceHolderArr] = useState([
    "제품명 / 중량을 입력해 주세요.",
    "원산지/원재함량을입력해주세요.",
    "등급 (근내지방도 수치)를 입력해 주세요.",
    "보관 방식을 입력해 주세요.",
    "식품 유형을 입력해 주세요. (ex) 포장육",
  ]);

  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemContent, setNewItemContent] = useState("");

  const handleClick = (event) => {
    if (newItemTitle === "" || newItemContent === "") return;
    setLabelArr((state) => [...state, newItemTitle]);
    setPlaceHolderArr((state) => [...state, newItemContent]);
    setNewItemTitle("");
    setNewItemContent("");
  };
  useEffect(() => {
    setNewItemTitle("");
    setNewItemContent("");
  }, []);
  return (
    <div className={styles.flexBox}>
      <div>정보고시 {order}</div>
      {labelArr.map((label, i) => (
        <Item
          label={label}
          id={`input-${i}`}
          placeholder={placeHolderArr[i]}
          key={i}
        />
      ))}
      <NewItem
        newItemTitle={newItemTitle}
        newItemContent={newItemContent}
        setNewItemTitle={setNewItemTitle}
        setNewItemContent={setNewItemContent}
        order={order}
      />
      <button
        children="+ 항목 추가"
        type="submit"
        form={`form-${order}`}
        onClick={handleClick}
      />
    </div>
  );
}

export default Items;
