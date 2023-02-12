import React, { useEffect } from "react";
import classes from "./App.module.css";
import CardContainer from "./Components/Card/CardContainer";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import NoteApp from "./Components/Notes/NoteApp";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react/cjs/react.development";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AllProjects from "./Components/Projects/AllProjects.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  const [project, setProject] = useState(true);
  const [todoId, setTodoId] = useState("");
  const [note, setNote] = useState(false);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("isUserLoggedIn");
    if (loggedInUser === "loggedIn") {
      setIsLoggedIn(true);
      setName(localStorage.getItem("name"));
      setUid(localStorage.getItem("uid"));
      setLoaded(true);
    }
  }, [open, uid]);
  return (
    <>
      {/* Tested NotesApp */}

      {/* {!isLoggedIn ? (
        <Landing
          setIsLoggedIn={setIsLoggedIn}
          setName={setName}
          setUid={setUid}
          setUser={setUser}
        />
      ) : (
        <NoteApp uid={uid} />
      )}
       */}
      {open ? (
        <Navbar
          setOpen={setOpen}
          open={open}
          setProject={setProject}
          setNote={setNote}
        />
      ) : (
        <div className={classes.hamburger} onClick={() => setOpen(!open)}>
          <FontAwesomeIcon className={classes.icon} icon={faBars} />
        </div>
      )}
      {!isLoggedIn ? (
        <Landing
          setIsLoggedIn={setIsLoggedIn}
          setName={setName}
          setUid={setUid}
          setUser={setUser}
        />
      ) : (
        <Dashboard name={name} uid={uid} todoId={todoId} />
      )}
    </>
  );
}

export default App;
