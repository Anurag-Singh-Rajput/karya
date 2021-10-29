import React from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import CardContainer from "./Components/Card/CardContainer";
import Greeting from "./Components/Greeting/Greeting";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Greeting />
      <CardContainer />
    </React.Fragment>
  );
}

export default App;
