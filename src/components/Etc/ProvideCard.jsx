import OnOffButton from "layout/OnOffButton";
import React from "react";
import styles from "./ProvideCard.module.css";

const ID_5 = "id5";

function ProvideCard() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>감사카드 제공</div>
      <div className={styles.content}>
        <OnOffButton id={ID_5} />
      </div>
    </div>
  );
}

export default ProvideCard;
