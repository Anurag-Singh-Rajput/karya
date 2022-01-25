import classes from "./Task.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const Task = (props) => {
  const handleClick = () => {
    props.clickHandler(props.index, props.type);
  };
  return (
    <div className={classes.task}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className={classes.btn}>
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
      </div>
    </div>
  );
};

export default Task;
