import Project from "./Project";
import classes from "./AllProjects.module.css";
import Header from "../Header/Header";
import Input from "../Dashboard/Input";
import { useState } from "react";
const AllProjects = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header name={props.name} />
      {open ? <Input setModal={setOpen} /> : null}
      <div className={classes.btn__class}>
        <button className={classes.button} onClick={() => setOpen(true)}>
          +
        </button>
      </div>
      <div className={classes.projects}>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </>
  );
};

export default AllProjects;
