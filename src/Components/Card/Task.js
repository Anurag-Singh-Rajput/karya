import classes from "./Task.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const Task = (props) => {
  return (
    <div className={classes.task}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className={classes.btn}>
        <button>
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
      </div>
    </div>
  );
};

export default Task;
