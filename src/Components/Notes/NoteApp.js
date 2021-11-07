import React from "react";
import classes from "./NoteApp.module.css";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
const NoteApp = () => {
  return (
    <React.Fragment>
      <div className={classes.header}>Notes</div>
      <CreateNote />
      <Notes />
    </React.Fragment>
  );
};

export default NoteApp;
