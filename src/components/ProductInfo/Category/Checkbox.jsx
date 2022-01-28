import { useContext, useState } from "react";
import { CategoryContext } from "./Contexts";

import styles from "./Checkbox.module.css";

const Checkbox = ({ value, index }) => {
  const [checked, setChecked] = useState(false);
  const checkHandler = (e) => {
    setChecked((checked) => !checked);
    checkedItemHandler(e.target.value, e.target.checked);
  };
  const { checkedItemHandler } = useContext(CategoryContext);
  return (
    <div>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        value={value}
        onChange={(e) => checkHandler(e)}
      />
      <label htmlFor={value}></label>
    </div>
  );
};

export default Checkbox;
