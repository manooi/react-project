import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {

  const [inputText, setInputText] = useState("");
  const [item, setItem] = useState([]);

  function handleChange(event) {
    const text = event.target.value;
    setInputText(text);
  }

  function addItem() {
    setItem(previous => {
      return [...previous, inputText]
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItem(previous => {
      return previous.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((toDoItem, index) => <ToDoList id={index} key={index} text={toDoItem} onChecked={deleteItem} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
