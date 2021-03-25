import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"



// One approach (rerendering all the time!)

// var count = 0;
// function increase() {
//   ReactDOM.render(
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//     </div>,
//     document.getElementById("root")
//   );
//   count++;
// }
// increase()

ReactDOM.render(<App />, document.getElementById("root"));

