import React from "react";
import "./App.css";
import CardContainer from "./Components/Card/CardContainer";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import NoteApp from "./Components/Notes/NoteApp";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react/cjs/react.development";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  return (
    <>
      {/* {!isLoggedIn ? (
        <Landing
          setIsLoggedIn={setIsLoggedIn}
          setName={setName}
          setUid={setUid}
        />
      ) : (
        <Dashboard name={name} uid={uid} />
      )} */}
      {/* <Dashboard /> */}
      {/* <Landing /> */}
      {/* <Navbar /> */}
      <NoteApp />
    </>
  );
}

export default App;
