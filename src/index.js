// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

const [honda, tesla] = cars;

// Extensive destructuring
const { coloursByPopularity: hondaTopColour, speedStats: { topSpeed: hondaTopSpeed } } = honda;

// ใส่ [] แล้วจะถอดอันแรกให้เลย
const { coloursByPopularity: [teslaTopColour], speedStats: { topSpeed: teslaTopSpeed } } = tesla;


// Set Default Value (if undefined)
const { coloursByPopularity = "Default colour" } = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Color</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopColour}</td>
      <td>{teslaTopSpeed}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopColour}</td>
      <td>{hondaTopSpeed}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
