import React from "react";

const Item = props => {
  const handleSubmit = e => {
    const id = Object.values(e.attributes["id"]);
    props.addCompleted({ content: e.innerHTML, id: props.index });
  };

  const removeElement = e => {
    props.removeElement({ id: props.index });
  };

  const editElement = e => {
    props.editElement(props.index);
  };

  return (
    <div className={` ${props.content.content == "" ? "d-none" : "list"}`}>
      <button onClick={e => editElement(e)}>Editar</button>
      <li
        key={props.index}
        id={props.index}
        onClick={e => handleSubmit(e.target)}
        className={`Item ${props.content.isCompleted ? "completed" : ""} `}
      >
        {props.content.content}
      </li>
      <button
        className="btn"
        id={props.index}
        onClick={e => removeElement(e.target)}
      >
        {props.content.content != undefined ? "X" : ""}
      </button>
    </div>
  );
};

export default Item;
