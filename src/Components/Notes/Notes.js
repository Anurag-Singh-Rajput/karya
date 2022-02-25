import Note from "./Note";
import classes from "./Notes.module.css";
const Notes = (props) => {
  // props.notes.map((note) => console.log(note));
  return (
    <div className={classes.notes}>
      {props.notes.map((note, index) => (
        <Note
          onDelete={props.onDelete}
          key={index}
          noteId={note.noteId}
          title={note.title}
          text={note.text}
        />
      ))}
    </div>
  );
};

export default Notes;
