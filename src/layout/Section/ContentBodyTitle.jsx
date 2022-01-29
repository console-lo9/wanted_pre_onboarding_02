import React from "react";
import styles from "./ContentBodyTitle.module.css";

const ContentBodyTitle = (props) => {
  return <div className={styles.title}>{props.children}</div>;
};

export default ContentBodyTitle;
