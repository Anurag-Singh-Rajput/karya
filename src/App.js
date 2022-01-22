import React from "react";
import "./App.css";
import CardContainer from "./Components/Card/CardContainer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NoteApp from "./Components/Notes/NoteApp";

function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Header />
      <CardContainer />
      {/* <NoteApp /> */}
    </React.Fragment>
  );
}

export default App;
