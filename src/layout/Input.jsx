import React from "react";

const Input = (props) => {
  const {
    type = "text",
    name = "",
    placeholder = "",
    value,
    onChange,
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
      id={id}
      className={className}
      required={required}
    />
  );
};

export default Input;
