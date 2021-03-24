import React from "react";
import Login from './Login';
import Mycheckbox from './Mycheckbox';

var isLoggedIn = false;
var currentTime = new Date(2021, 12, 12, 8).getHours();

function renderConditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return (
      <Login />
    );
  }
}

function App() {
  return (
    <div className="container">
      {/* Option1: Using function */}
      {/* {renderConditionally()} */}

      {/* Option 2: Ternary operator */}
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {currentTime > 6 ? <h1>Hello</h1> : null}

      {/* Option 3: && || */}
      {currentTime > 6 && <h1>Tis is just works!</h1>}
    </div>
  );
}

export default App;
