import React from "react";


function App() {

  let time = new Date().toLocaleTimeString();
  let [currentTime, setTime] = React.useState(time);

  function updateTime() {
    time = new Date().toLocaleTimeString();
    currentTime = setTime(time);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );

}



export default App;
