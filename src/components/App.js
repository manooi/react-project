import React, { useState } from "react";
import ToDoList from "./ToDoList";
import InputArea from "./InputArea"

function App() {

  const [item, setItem] = useState([]);


  function addItem(inputText) {
    setItem(previous => {
      return [...previous, inputText]
    });
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
      <InputArea addItem={addItem} />
      <div>
        <ul>
          {item.map((toDoItem, index) => <ToDoList id={index} key={index} text={toDoItem} onChecked={deleteItem} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
