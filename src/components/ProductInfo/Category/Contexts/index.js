import { createContext, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([...Array(5).keys()]);
  const [checkedItems, setCheckedItems] = useState([]);

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, id]);
    } else if (!isChecked && checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    }
    return checkedItems;
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        checkedItems,
        checkedItemHandler,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
