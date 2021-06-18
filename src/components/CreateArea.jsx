import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {


  const [isClick, setClick] = useState(false);


  function handleClick() {
    setClick(true);
  }


  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">

        {isClick &&
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isClick ? "3" : "1"}
          onClick={handleClick}
        />
        <Zoom in={isClick} timeout={500}>
          <Fab onClick={submitNote}><AddCircleIcon /></Fab>
        </Zoom>

      </form>
    </div >
  );
}

export default CreateArea;
