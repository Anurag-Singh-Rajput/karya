import classes from "./Card.module.css";
import Task from "./Task";

const Card = () => {
  return (
    <div className={classes.card}>
      <h1>Title</h1>
      <span>+</span>
      <div className={classes.tasks}>
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Card;
