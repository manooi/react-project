import React from "react";
import Login from './Login';
import Mycheckbox from './Mycheckbox';

var userIsRegistered = false;


function App() {
  return (
    <div className="container">
      <Login userIsRegistered={userIsRegistered} />
    </div>

  );
}

export default App;
