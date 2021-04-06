import React, { useState } from "react";


function ToDoList(props) {

  const [style, setStyle] = useState({
    textDecoration: "initial"
  });

  function handleClick(event) {
    // if (style.textDecoration === "initial") {
    //   setStyle({ textDecoration: "line-through" });
    // } else {
    //   setStyle({ textDecoration: "initial" });
    // }
    setStyle({ textDecoration: style.textDecoration === "initial" ? "line-through" : "initial" })
  }
  return <li style={style} onClick={handleClick}>{props.text}</li>;
}

export default ToDoList;