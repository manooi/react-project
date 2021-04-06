import React, { useState } from "react";


function ToDoList(props) {

  const [isDone, setIsDone] = useState(false);
  function handleClick(event) {
    setIsDone(previous => !previous);
  }

  return <li style={{ textDecoration: isDone ? "line-through" : "initial" }} onClick={handleClick}>{props.text}</li>;
}

export default ToDoList;