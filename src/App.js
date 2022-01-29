import React from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* {!isLoggedIn ? (
        <Landing
          setIsLoggedIn={setIsLoggedIn}
          setName={setName}
          setUid={setUid}
        />
      ) : !open ? (
        <div className={classes.hamburger} onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      ) : (
        <Navbar setOpen={setOpen} />
      )} */}
      {/* <Dashboard name={name} uid={uid} /> */}
      {/* <Landing /> */}
      {/* <Navbar /> */}
      {/* <NoteApp /> */}
      <AllProjects />
    </>
  );
}

export default App;
