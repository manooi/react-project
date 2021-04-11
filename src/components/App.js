import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [item, setItem] = useState([]);

  function addItem(note) {
    setItem(previous => {
      return [...previous, note]
    });
  }

  function deleteItem(id) {
    setItem(previous => {
      return previous.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {item.map((n, index) =>
        <Note onDelete={deleteItem} key={index} id={index} title={n.title} content={n.content} />
      )}
      <Footer />
    </div>
  );
}

export default App;
