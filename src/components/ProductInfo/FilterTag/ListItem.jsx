import { useCallback, useContext } from "react";
import { ItemContext } from "store/Contexts/FilterTag";
import styles from "./ListItem.module.css";
const ListItem = ({ children }) => {
  const { items, setItems, setIsShow } = useContext(ItemContext);
  const handleItem = useCallback(
    (e) => {
      const arr = items.concat(e.target.innerText).filter((item, index) => {
        return items.concat(e.target.innerText).indexOf(item) === index;
      });
      setItems(arr);
      setIsShow(false);
    },
    [items]
  );

  return (
    <div className={styles.container}>
      <button className={styles.button} onMouseDown={handleItem}>
        {children}
      </button>
    </div>
  );
};

export default ListItem;
