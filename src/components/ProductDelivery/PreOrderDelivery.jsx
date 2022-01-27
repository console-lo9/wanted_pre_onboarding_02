import Calender from "layout/Calender";
import OnOffButton from "layout/OnOffButton";
import ShortCalender from "layout/ShortCalender";
import React from "react";
import styles from "./PreOrderDelivery.module.css";

const ID_3 = "id3";

function PreOrderDelivery() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>선 주문 예약 배송</div>
      <div className={styles.content}>
        <OnOffButton id={ID_3} />
        <div>
          주문 시간
          <Calender />
          ~
          <Calender />
        </div>
        <div>
          새벽 배송
          <ShortCalender />
          일반 배송
          <ShortCalender />
        </div>
      </div>
    </div>
  );
}

export default PreOrderDelivery;
