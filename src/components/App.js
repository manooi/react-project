import React, { useState } from "react";

function App() {

  const [name, setName] = useState("")
  const [headingText, setHeadingText] = useState("")

  function handleChange(event) {
    setName(event.target.value);
    // console.log(event.target.value);
    // setName(event.target.placeholder);
  }

  function handleClick(event) {
    setHeadingText(name)

    // ห้ามไม่ให้ Refresh!
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input onChange={handleChange} type="text" placeholder="What's your name?" value={name} />
        <button type="submit">Submit </button>
      </form>
    </div>
  );
}

export default App;
