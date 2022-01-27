import OnOffButton from "layout/OnOffButton";
import React from "react";
import styles from "./ProductDepartureDate.module.css";

const ID_1 = "id1";

function ProductDepartureDate() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>사용자 배송일 출발일 지정</div>
      <div className={styles.content}>
        <OnOffButton id={ID_1} />
      </div>
    </div>
  );
}

export default ProductDepartureDate;
