import OnOffButton from "layout/OnOffButton";
import React from "react";
import styles from "./AccumulateMileage.module.css";

const ID_2 = "id2";

function AccumulateMileage() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>마일리지 적립</div>
      <div className={styles.content}>
        <OnOffButton id={ID_2} />
      </div>
    </div>
  );
}

export default AccumulateMileage;
