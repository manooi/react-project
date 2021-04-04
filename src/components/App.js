import React, { useState } from "react";
import reactDom from "react-dom";

function App() {

  const [name, setname] = useState("")

  function handleChange(event) {
    console.log(event.target.value);
    setname(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" value={name} />
      <button> Submit </button>
    </div>
  );
}

export default App;
