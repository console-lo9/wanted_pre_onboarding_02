import React from "react";
import styles from "./SectionWrapper.module.css";

const SectionWrapper = (props) => {
  return (
    <div className={`${styles.wrapper} ${styles.period}`}>{props.children}</div>
  );
};

export default SectionWrapper;
