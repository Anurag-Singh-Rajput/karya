import Note from "./Note";
import classes from "./Notes.module.css";
const Notes = () => {
  return (
    <div className={classes.notes}>
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default Notes;
