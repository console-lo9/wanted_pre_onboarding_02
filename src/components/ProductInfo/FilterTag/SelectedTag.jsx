import { useContext, useEffect, useState } from "react";
import { ItemContext } from "./Contexts";
import SelectedListItem from "./SelectedListItem";

import styles from "./SelectedTag.module.css";
const SelectedTag = () => {
  const { items } = useContext(ItemContext);

  return (
    <div className={styles.container}>
      {items.map((value) => {
        return <SelectedListItem>{value}</SelectedListItem>;
      })}
    </div>
  );
};

export default SelectedTag;