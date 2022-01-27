import React from "react";
import styles from "./RadioInput.module.css";

const RadioInput = (props) => {
  return (
    <input
      className={styles.radio}
      type="radio"
      value={props.value}
      onChange={props.onChange}
      checked={props.checked}
    >
      {props.children}
    </input>
  );
};

export default RadioInput;
