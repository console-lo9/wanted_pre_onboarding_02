
import Calendar from "layout/Calendar";
import ShortCalendar from "layout/ShortCalendar";
import React, { Fragment, useState } from "react";
import styles from "./SetTime.module.css";

function SetTime({}) {
  return (
    <div className={styles.contain}>
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
    </div>
  );
}

export default SetTime;
