import React from "react";
import styles from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  return <div className={styles.header}>{props.children}</div>;
};

export default SectionHeader;
