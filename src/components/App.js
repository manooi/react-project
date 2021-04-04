import React, { useState } from "react";
import reactDom from "react-dom";

function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={
          isMouseOver ? { backgroundColor: "black" } : { backgroundColor: "white" }
        }
        onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default App;
