import { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const handleClick = () => {
    props.setModal(false);
    props.setPendingTasks((prevTask) => {
      return [task, ...prevTask];
    });
  };
  const [task, setTask] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  };
  return (
    <div className={classes.form__container}>
      <form action="#">
        <input
          name="title"
          value={task.title}
          placeholder="Enter title for your note"
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          value={task.content}
          placeholder="Take a note..."
          onChange={handleChange}
          rows="3"
          required
        />
        <button type="submit" onClick={handleClick}>
          +
        </button>
      </form>
    </div>
  );
};

export default Input;
