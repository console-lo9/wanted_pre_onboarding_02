import styles from "./Button.module.css";

const AddButton = (props) => {
  const tag = props.tag;

  return (
    <button
      className={`${styles.button} ${styles[tag]} ${props.className}`}
      tag={props.tag}
      type={`${props.type}`}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      id={props.id}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

export default AddButton;
