import { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const handleClick = () => {
    props.setModal(false);
    if (props.source === "dashboard") {
      props.setPendingTasks((prevTask) => {
        return [task, ...prevTask];
      });
    } else {
      props.setProjects((prevProjects) => {
        return [project, ...prevProjects];
      });
    }
  };
  const [task, setTask] = useState({
    title: "",
    content: "",
  });
  const [project, setProject] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e) => {
    console.log(e);
    if (props.source === "dashboard") {
      const { name, value } = e.target;
      setTask((prevTask) => {
        return {
          ...prevTask,
          [name]: value,
        };
      });
    } else {
      const { name, value } = e.target;
      setProject((prevProject) => {
        return {
          ...prevProject,
          [name]: value,
        };
      });
    }
  };
  return (
    <div className={classes.form__container}>
      <form action="#">
        <input
          name="title"
          value={props.source === "dashboard" ? task.title : project.title}
          placeholder="Enter title for your note"
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          value={props.source === "dashboard" ? task.content : project.content}
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
