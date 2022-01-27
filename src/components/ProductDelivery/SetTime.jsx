import Calender from "layout/Calender";
import ShortCalender from "layout/ShortCalender";
import React, { Fragment, useState } from "react";
import styles from "./SetTime.module.css";

function SetTime({}) {
  return (
    <div className={styles.contain}>
      <div>
        <span>주문 시간</span>
        <Calender />
        <span>~</span>
        <Calender />
      </div>
      <div>
        <span>새벽 배송</span>
        <ShortCalender />
        <span>일반 배송</span>
        <ShortCalender />
      </div>
    </div>
  );
}

export default SetTime;
