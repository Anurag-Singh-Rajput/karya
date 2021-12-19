import Note from "./Note";
import classes from "./Notes.module.css";
const Notes = (props) => {
  return (
    <div className={classes.notes}>
      {props.notes.map((note) => (
        <Note title={note.title} text={note.text} />
      ))}
    </div>
  );
};

export default Notes;
