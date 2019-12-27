import React, { Component, useState } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import "./index.css";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [items, setItems] = useState([
    {
      content: "📘 Aprender React",
      isCompleted: false
    },
    {
      content: "⚛️ Crear mi primera aplicación",
      isCompleted: false
    },
    {
      content: "🚀 Subirla a GitHub",
      isCompleted: false
    }
  ]);

  const [elementUpdate, setEdit] = useState("");

  const addItem = content => {
    const newItems = [...items, { content: content }];
    setItems(newItems);
  };

  const addCompleted = content => {
    const id = content.id;
    const addCompleted = [...items];

    addCompleted[id].isCompleted = !addCompleted[id].isCompleted;
    setItems(addCompleted);
  };

  const removeElement = content => {
    const itemRemove = [...items, items.splice(content.id, 1)];
    setItems(itemRemove);
  };

  const editElement = content => {
    elementUpdate = items[content];
    setEdit(elementUpdate);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ItemForm addItem={addItem} elementUpdate={elementUpdate} />
      <ul className="ItemList">
        {items.length === 0 ? (
          <span> No hay elementos en la lista</span>
        ) : (
          items.map((item, index) => (
            <Item
              key={index}
              index={index}
              addCompleted={addCompleted}
              removeElement={removeElement}
              editElement={editElement}
              content={item}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
render(<App />, document.getElementById("root"));
