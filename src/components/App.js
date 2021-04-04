import React, { useState } from "react";
import reactDom from "react-dom";

function App() {

  const [headingText, setHeadingText] = useState("Hello");

  const [currentStyle, setStyle] = useState();

  function handleClick() {
    setHeadingText("Submitted");
  }

  function onMouseStyle() {
    setStyle({
      backgroundColor: "black"
    });
  }

  function outMouseStyle() {
    setStyle({ backgroundColor: "white" });
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={onMouseStyle} onMouseOut={outMouseStyle} style={currentStyle} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
