import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target
    // const inputValue = event.target.value
    // const inputName = event.target.name

    setContact((prev) => {
      // ห้ามใช้ event.target.name หรืออื่น ๆ ใน setter นี้
      // จะเกิด synthetic event error
      if (name === "fName") {
        return { fName: value, lName: prev.lName, email: prev.email };
      } else if (name === "lName") {
        return { lName: value, fName: prev.fName, email: prev.email };
      } else {
        return { email: value, fName: prev.fName, lName: prev.lName };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={contact.fName} />
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={contact.lName} />
        <input onChange={handleChange} name="email" placeholder="Email" value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
