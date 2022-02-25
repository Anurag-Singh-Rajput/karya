import classes from "./Note.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Note = (props) => {
  const handleClick = () => {
    console.log(props.noteId);
    props.onDelete(props.noteId);
  };
  return (
    <div className={classes.note}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <div className={classes.btn}>
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default Note;
