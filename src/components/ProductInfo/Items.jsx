import { Input } from "@mui/material";
import React, { useState } from "react";
import Item from "./Item";
import styles from "./Items.module.css";

function Items() {
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

  const [id, setId] = useState(0);

  return (
    <div className={styles.flexBox}>
      {labelArr.map((label, i) => (
        <Item label={label} id={`input-${i}`} placeholder={placeHolderArr[i]} />
      ))}
    </div>
  );
}

export default Items;
