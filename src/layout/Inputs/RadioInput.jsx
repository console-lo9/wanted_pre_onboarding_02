import styles from "./RadioInput.module.css";

const RadioInput = (props) => {
  return (
    <input className={styles.radio} type="radio">
      {props.children}
    </input>
  );
};

export default RadioInput;
