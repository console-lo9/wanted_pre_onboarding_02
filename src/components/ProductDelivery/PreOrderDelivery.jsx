import Calendar from "layout/Calendar";
import OnOffButton from "layout/OnOffButton";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import ShortCalendar from "layout/ShortCalendar";
import React, { useState } from "react";
import styles from "./PreOrderDelivery.module.css";
import SetTime from "./SetTime";

const ID_3 = "id3";

function PreOrderDelivery({ checked3, setChecked1, setChecked2, setChecked3 }) {
  const handleClick = () => {
    setChecked3((check) => !check);
    setChecked1(false);
    setChecked2(false);
  };

  return (
    <SectionBody children="flexBox">
      <ContentBodyTitle children="선 주문 예약 배송"></ContentBodyTitle>
      <SectionBodyContent>
        <OnOffButton id={ID_3} onClick={handleClick} checked={checked3} />
        <div>
          <span>주문 시간</span>
          <Calendar />
          <span>~</span>
          <Calendar />
        </div>
        <div>
          <span>새벽 배송</span>
          <ShortCalendar />
          <span>일반 배송</span>
          <ShortCalendar />
        </div>
      </SectionBodyContent>
    </SectionBody>
  );
}

export default PreOrderDelivery;
