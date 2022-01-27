import React from "react";

const Input = (props) => {
  const { type = "text", name = "", placeholder = "", value, onChange } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
