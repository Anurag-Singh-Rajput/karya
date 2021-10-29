import React from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import CardContainer from "./Components/Card/CardContainer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Header />
      <CardContainer />
    </React.Fragment>
  );
}

export default App;
