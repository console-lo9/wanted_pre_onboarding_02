import React from "react";

const Input = (props) => {
  const {
    type = "text",
    name = "",
    placeholder = "",
    value,
    onChange,
    className = "",
  } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;
