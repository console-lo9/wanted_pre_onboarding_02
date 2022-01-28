import React from "react";

const Input = (props) => {
  const {
    type = "text",
    name = "",
    placeholder = "",
    value,
    onChange,
    id = "",
  } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
    />
  );
};

export default Input;
