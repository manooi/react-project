import React, { useState } from 'react';

function App() {

  // Basic state
  // const state = useState(5); //Initial State value
  // console.log(state[0]);

  //ES6 Destrucring!
  // const [red, green, blue] = [9, 132, 227]
  // console.log(blue);

  const [count, setCount] = useState(0);
  console.log(setCount);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;