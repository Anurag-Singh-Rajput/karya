import { useState } from "react";
import classes from "./CreateNote.module.css";
import { firebase } from "../../Firebase/firebase";
import {
  doc,
  setDoc,
  getFirestore,
  addDoc,
  collection,
} from "firebase/firestore";
const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    text: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    const db = getFirestore();
    try {
      const docRef = addDoc(
        collection(db, "db/", props.uid, "/notes"),
        {
          title: note.title,
          content: note.text,
        },
        { merge: true }
      );
      console.log(docRef);
    } catch (err) {
      console.log(err);
    }
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
      <form action="#">
        <input
          name="title"
          placeholder="Enter title for your note"
          value={note.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="text"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
          required
        />
        <button type="submit" onClick={handleClick}>
          +
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
