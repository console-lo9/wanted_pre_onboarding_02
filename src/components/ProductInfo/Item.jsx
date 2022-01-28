import Input from "layout/Input";
import React from "react";

function Item(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <Input placeholder={props.placeholder} id={props.id} />
    </div>
  );
}

export default Item;
