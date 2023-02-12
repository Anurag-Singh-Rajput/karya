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
import Dashboard from "../Dashboard/Dashboard";
const AllProjects = (props) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showTodo, setShowTodo] = useState(false);
  const [projects, setProjects] = useState([
    {
      title: "Karya",
      content:
        "Karya is a web based produtivity appp which is designed to increase your productivity, integrated with notes app",
      todoid: "0",
    },
    {
      title: "Project X",
      content:
        "lorem ipsum project x lorem ipsum project x ipsum project x ipsum project x ",
      todoid: "1",
    },
    {
      title: "Project Y",
      content:
        "Karya is a web based produtivity appp which is designed to increase your productivity, integrated with notes app",
      todoid: "2",
    },
    {
      title: "Project Z",
      content:
        "Z is a weZZZb baZZZZZsed Z appp which is designeZZZ loreme ispdusrms e sj d to increase your productivity, integrated Zwith notes app",
      todoid: "3",
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
    let element = { title: "", content: "", todoid: "" };
    Promise.resolve(querySnapshot).then((data) =>
      data.docs.map((ele) => {
        element.title =
          ele._document.data.value.mapValue.fields.title.stringValue;
        element.content =
          ele._document.data.value.mapValue.fields.content.stringValue;
        element.todoid = ele._document.key.path.segments[8];
      })
    );
    setProjects([...projects, element]);
    setIsLoading(false);
  };

  return (
    <>
      {!isLoading ? (
        <>
          {!showTodo ? <Header name={props.name} /> : null}
          {open ? (
            <Input
              setModal={setOpen}
              setProjects={setProjects}
              source={"projects"}
            />
          ) : null}
          {!showTodo ? (
            <div className={classes.btn__class}>
              <button className={classes.button} onClick={() => setOpen(true)}>
                +
              </button>
            </div>
          ) : null}
          <div className={classes.projects}>
            {!showTodo ? (
              projects.map((project) => (
                <Project
                  title={project.title}
                  content={project.content}
                  setTodoId={props.setTodoId}
                  todoid={project.todoid}
                  setShowTodo={setShowTodo}
                />
              ))
            ) : (
              <Dashboard name="Anurag Singh" setTodoId={props.setTodoId} />
            )}
          </div>
        </>
      ) : (
        setVariables()
      )}
    </>
  );
};

export default AllProjects;
