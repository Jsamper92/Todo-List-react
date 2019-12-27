import React, { Component, useState } from "react";
import { render } from "react-dom";

function ItemForm(props) {
  const [value, setValue] = useState("");
  const handleSubdmit = e => {
    console.log(e.target);
    e.preventDefault();
    if (!value) return;
    props.addItem(value);
    setValue("");

    return value;
  };
  return (
    <form className="ItemForm">
      <input
        type="text"
        placeholder={
          props.elementUpdate.content == undefined
            ? "Introduce una tarea"
            : props.elementUpdate.content
        }
        onChange={e => setValue(e.target.value)}
      />
      <button className="btn-send" onClick={handleSubdmit}>
        Enviar
      </button>
    </form>
  );
}

export default ItemForm;
