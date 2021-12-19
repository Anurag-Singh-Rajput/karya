import classes from "./Note.module.css";
const Note = (props) => {
  return (
    <div className={classes.note}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default Note;
