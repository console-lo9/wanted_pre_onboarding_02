import OnOffButton from "layout/OnOffButton";
import React from "react";
import styles from "./Visiting.module.css";

const ID_2 = "id2";

function Visiting() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>방문 수령</div>
      <div className={styles.content}>
        <OnOffButton id={ID_2} />
      </div>
    </div>
  );
}

export default Visiting;
