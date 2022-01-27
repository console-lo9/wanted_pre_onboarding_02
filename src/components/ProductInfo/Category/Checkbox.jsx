import { useContext, useState } from "react";
import { CategoryContext } from "./Contexts";

const Checkbox = ({ value }) => {
  const [checked, setChecked] = useState(false);
  const checkHandler = ({ target }) => {
    setChecked((checked) => !checked);
    checkedItemHandler(target.value, target.checked);
  };
  const { checkedItems, checkedItemHandler } = useContext(CategoryContext);
  return (
    <input
      type="checkbox"
      checked={checked}
      value={value}
      onChange={(e) => checkHandler(e)}
    />
  );
};

export default Checkbox;
