import classes from "./Note.module.css";
const Note = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };
  return (
    <div className={classes.note}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Note;
