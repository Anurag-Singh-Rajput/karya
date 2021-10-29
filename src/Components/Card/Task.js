import classes from "./Task.module.css";
const Task = () => {
  return (
    <div className={classes.task}>
      <h1>Task Name</h1>
      <p>
        Task Description - Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed ac arcu dignissim, suscipit mi a, sollicitudin nisi. Maecenas
        ac enim sed leo elementum lobortis et at ex. Proin rhoncus nisi velit,
        eget faucibus justo lobortis eget
      </p>
    </div>
  );
};

export default Task;
