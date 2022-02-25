import Project from "./Project";
import classes from "./AllProjects.module.css";
import Header from "../Header/Header";
import Input from "../Dashboard/Input";
import { useState } from "react";
import {
  doc,
  collection,
  query,
  getDocs,
  getFirestore,
  deleteDoc,
} from "firebase/firestore";
const AllProjects = (props) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([
    {
      title: "Karya",
      content:
        "Karya is a web based produtivity appp which is designed to increase your productivity, integrated with notes app",
    },
    {
      title: "Project X",
      content:
        "lorem ipsum project x lorem ipsum project x ipsum project x ipsum project x ",
    },
    {
      title: "Project Y",
      content:
        "Karya is a web based produtivity appp which is designed to increase your productivity, integrated with notes app",
    },
    {
      title: "Project Z",
      content:
        "Z is a weZZZb baZZZZZsed Z appp which is designeZZZ loreme ispdusrms e sj d to increase your productivity, integrated Zwith notes app",
    },
  ]);

  const setVariables = () => {
    const db = getFirestore();
    let newUid = "";
    if (props.uid === "") {
      newUid = localStorage.getItem("uid");
    } else newUid = props.uid;
    const q = query(collection(db, "db/" + newUid + "/projects"));
    const querySnapshot = getDocs(q);
    Promise.resolve(querySnapshot).then((data) =>
      data.docs.map((ele) => {
        console.log(ele._document.data.value.mapValue.fields);
      })
    );
    setIsLoading(false);
  };

  return (
    <>
      {!isLoading ? (
        <>
          <Header name={props.name} />
          {open ? (
            <Input
              setModal={setOpen}
              setProjects={setProjects}
              source={"projects"}
            />
          ) : null}
          <div className={classes.btn__class}>
            <button className={classes.button} onClick={() => setOpen(true)}>
              +
            </button>
          </div>
          <div className={classes.projects}>
            {projects.map((project) => (
              <Project title={project.title} content={project.content} />
            ))}
          </div>
        </>
      ) : (
        setVariables()
      )}
    </>
  );
};

export default AllProjects;
