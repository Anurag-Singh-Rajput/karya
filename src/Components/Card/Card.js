import classes from "./Card.module.css";
import Task from "./Task";
const Card = (props) => {
  return (
    <div className={classes.card}>
      <h1>{props.title}</h1>
      {props.add ? (
        <button type="submit" className={classes.btn}>
          +
        </button>
      ) : null}
      <div className={classes.tasks}>
        {props.tasks.length === 0 ? (
          <p className={classes.no__cards}>Nothing to show!</p>
        ) : (
          props.tasks.map((task) => (
            <Task title={task.title} content={task.content} />
          ))
        )}
      </div>
    </div>
  );
};

export default Card;
