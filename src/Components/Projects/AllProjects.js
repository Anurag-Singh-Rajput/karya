import Project from "./Project";
import classes from "./AllProjects.module.css";
import Header from "../Header/Header";
const AllProjects = () => {
  return (
    <>
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
