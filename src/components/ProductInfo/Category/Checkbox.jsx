import { useContext, useState } from "react";
import { CategoryContext } from "./Contexts";

const Checkbox = ({ value, index }) => {
  const [checked, setChecked] = useState(false);
  const checkHandler = (e) => {
    setChecked((checked) => !checked);
    checkedItemHandler(e.target.value, e.target.checked);
  };
  const { checkedItemHandler } = useContext(CategoryContext);
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
