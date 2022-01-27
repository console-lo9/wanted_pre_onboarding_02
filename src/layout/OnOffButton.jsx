import React, { Fragment } from "react";
import styles from "./OnOffButton.module.css";

function OnOffButton({ id }) {
  return (
    <div>
      <input id={id} type="checkbox" className={styles.btn} />
      <label htmlFor={id} className={styles.label}>
        <span></span>
      </label>
    </div>
  );
}

export default OnOffButton;
