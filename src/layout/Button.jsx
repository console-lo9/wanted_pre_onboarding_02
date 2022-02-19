import styles from "./Button.module.css";

const Button = ({ children, className, tag, type, id, value, ...rest }) => {
  return (
    <button
      className={`${styles.button} ${styles[tag]} ${className}`}
      tag={tag}
      type={`${type}`}
      id={id}
      value={value}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
