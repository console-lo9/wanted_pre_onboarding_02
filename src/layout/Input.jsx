import React from "react";

import styles from "./Input.module.css";
const Input = (props) => {
  const {
    type = "text",
    name = "",
    placeholder = "",
    value,
    onChange,
    onFocus,
    onBlur,
    ref,
    id = "",
    className = "",
    required = true,
  } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
      id={id}
      className={`${styles.input} ${className}`}
      required={required}
    />
  );
};

export default Input;
