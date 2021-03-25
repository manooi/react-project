<<<<<<< master
import React from 'react';
import Card from './Card';
import contacts from '../contacts'


function createCard(contact) {
  return <Card
    key={contact.id}
    id={contact.id}
    name={contact.name}
    imgUrl={contact.imgURL}
    email={contact.email}
    phone={contact.phone}
  />;
=======
import { CircularProgress } from "@material-ui/core";
import React from "react";
import Login from './Login';
import Mycheckbox from './Mycheckbox';

// Imperative
function cross() {
  document.getElementById("root").style.textDecoration = "line-through";
}
function uncross() {
  document.getElementById("root").style.textDecoration = null;
>>>>>>> local
}

// Declarative
var isDone = false;
function cross2() {
  isDone = true;
}
function uncross2() {
  isDone = false;
}

function App() {
  return (
<<<<<<< master
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
=======
    <div className="container">
      <p>Holy sheep</p>

      {/* Imperative */}
      <button onClick={cross}>cross</button>
      <button onClick={uncross}>uncross</button>

      {/* Declarative */}
      <p style={isDone ? { textDecoration: "line-through" } : null}>Holy sheep 1</p>

      {/* Declarative2 (won't work) */}
      <p style={isDone ? { textDecoration: "line-through" } : null}>Holy sheep 2</p>
      <button onClick={cross2}>cross</button>
      <button onClick={uncross2}>uncross</button>
      {/* Wont' work... need to render..and then cannot change the value! */}
>>>>>>> local
    </div>
  );
}

export default App;
