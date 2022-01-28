import Input from "layout/Input";
import React from "react";

function Item(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <Input placeholder={props.placeholder} id={props.id} />
      {props.name >= 5 ? (
        <button name={props.name} onClick={props.handleDelete}>
          삭제
        </button>
      ) : null}
    </div>
  );
}

export default Item;
