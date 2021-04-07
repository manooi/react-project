import React from "react";

function InputArea(props) {

  function handleChange(event) {
    const text = event.target.value;
    props.setInputText(text);
  }

  function addItem() {
    props.setItem(previous => {
      return [...previous, props.inputText]
    });
    props.setInputText("");
  }

  return (<div className="form">
    <input
      onChange={handleChange}
      type="text"
      value={props.inputText} />
    <button onClick={addItem}>
      <span>Add</span>
    </button>
  </div>);

}

export default InputArea;