import React, { useState } from "react";
import classes from "./NoteApp.module.css";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
const NoteApp = () => {
  const initialNotes = [
    {
      title: "This is title 1",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
    },
    {
      title: "This is title 2",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
    },
    {
      title: "This is title 3",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
    },
    {
      title: "This is title 4",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
    },
  ];
  const [notes, setNotes] = useState(initialNotes);
  const onDelete = (id) => {
    const newNote = notes.filter((note, index) => index !== id);
    setNotes(newNote);
  };
  return (
    <React.Fragment>
      <div className={classes.header}>Notes</div>
      <CreateNote setNotes={setNotes} />
      <Notes notes={notes} onDelete={onDelete} />
    </React.Fragment>
  );
};

export default NoteApp;
