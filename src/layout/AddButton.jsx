import styles from "./AddButton.module.css";

const AddButton = (props) => {
  return (
    <button className={`${styles["add-button"]}`} type={props.type || "button"}>
      {props.children}
    </button>
  );
};

export default AddButton;
