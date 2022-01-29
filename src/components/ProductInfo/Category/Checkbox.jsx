import { useContext } from "react";
import { CategoryContext } from "./Contexts";

const Checkbox = ({ value, checked }) => {
  const { cateObject, setCateObject } = useContext(CategoryContext);

  const checkHandler = (e) => {
    let copyObject = { ...cateObject };
    copyObject[value] = !checked;
    setCateObject(copyObject);
  };
  return (
    <input
      type="checkbox"
      value={value}
      checked={checked}
      onChange={(e) => checkHandler(e)}
    />
  );
};

export default Checkbox;
