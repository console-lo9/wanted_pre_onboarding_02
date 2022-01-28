import React from "react";
import styles from "./SectionBodyContent.module.css";

const SectionBodyContent = (props) => {
  return <div className={styles.content}>{props.children}</div>;
};

export default SectionBodyContent;
