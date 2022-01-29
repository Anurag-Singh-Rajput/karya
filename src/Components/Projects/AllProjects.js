import Project from "./Project";
import classes from "./AllProjects.module.css";
import Header from "../Header/Header";
const AllProjects = () => {
  return (
    <>
      <Header name={"Anurag Singh"} />
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
