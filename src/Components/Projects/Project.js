import classes from "../Projects/Project.module.css";

const Project = (props) => {
  return (
    <>
      <div
        className={classes.project__container}
        onClick={() => {
          props.setTodoId(props.todoid);
          console.log(props.todoid);
          props.setShowTodo(true);
        }}
      >
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </>
  );
};

export default Project;
