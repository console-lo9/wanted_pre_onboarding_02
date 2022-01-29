import { useContext } from "react";
import { CategoryContext } from "./Contexts";

import styles from "./Checkbox.module.css";

const Checkbox = ({ value, checked }) => {
  const { cateObject, setCateObject } = useContext(CategoryContext);

  const checkHandler = (e) => {
    let copyObject = { ...cateObject };
    copyObject[value] = !checked;
    setCateObject(copyObject);
  };
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
