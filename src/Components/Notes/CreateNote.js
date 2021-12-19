import { useState } from "react";
import classes from "./CreateNote.module.css";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    text: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    props.setNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  return (
    <div className={classes.form__container}>
      <form>
        <input
          name="title"
          placeholder="Enter title for your note"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="text"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          +
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
