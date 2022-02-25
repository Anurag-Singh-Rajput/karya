import { useState } from "react";
import Card from "../Card/Card";
import CardContainer from "../Card/CardContainer";
import Header from "../Header/Header";
import AllProjects from "../Projects/AllProjects";
import Input from "./Input";

const plan = [
  {
    title: "Plan out the UI of the app",
    content:
      "Random bs go random bs go. The need to create a beautiful user interface",
  },
  {
    title: "Integrate SocketIO",
    content:
      "This is where some of the description for the given work would come ....",
  },
  // {
  //   title: "Deployment",
  //   content: "Deploy the app to make it availaile for the users",
  // },
];
const ongoing = [
  {
    title: "App Plan",
    content:
      "Planning of what the app is about and what features would be available",
  },
];
const completed = [];

const Dashboard = (props) => {
  const [modal, setModal] = useState(false);
  const [pendingTasks, setPendingTasks] = useState(plan);
  const [ongoingTasks, setOngoingTasks] = useState(ongoing);
  const [completedTasks, setCompletedTasks] = useState(completed);
  return (
    <>
      <Header name={props.name} />
      {/* <AllProjects name="Anurag Singh" /> */}
      {modal ? (
        <Input
          setModal={setModal}
          setPendingTasks={setPendingTasks}
          setOngoingTasks={setOngoingTasks}
          setCompletedTasks={setCompletedTasks}
        />
      ) : null}
      <CardContainer
        setModal={setModal}
        pendingTasks={pendingTasks}
        setPendingTasks={setPendingTasks}
        ongoingTasks={ongoingTasks}
        setOngoingTasks={setOngoingTasks}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
      />
    </>
  );
};

export default Dashboard;
