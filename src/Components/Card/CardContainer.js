import { useState } from "react/cjs/react.development";
import Card from "./Card";
import classes from "./CardContainer.module.css";
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
const CardContainer = () => {
  const [pendingTasks, setPendingTasks] = useState(plan);
  const [ongoingTasks, setOngoingTasks] = useState(ongoing);
  const [completedTasks, setCompletedTasks] = useState(completed);

  const clickHandler = (i, key) => {
    console.log(key);
    if (key === 1) {
      const newNotes = pendingTasks.filter((task, index) => {
        if (i === index) {
          const moveTasks = [...ongoingTasks, task];
          setOngoingTasks(moveTasks);
        } else return task;
      });
      setPendingTasks(newNotes);
    } else if (key === 2) {
      const newNotes = ongoingTasks.filter((task, index) => {
        if (i === index) {
          const moveTasks = [...completedTasks, task];
          setCompletedTasks(moveTasks);
        } else return task;
      });
      setOngoingTasks(newNotes);
    }
  };

  return (
    <div className={classes.container}>
      <Card
        title="Tasks"
        tasks={pendingTasks}
        add={true}
        type={1}
        handleClick={clickHandler}
      />
      <Card
        title="Ongoing"
        tasks={ongoingTasks}
        add={false}
        type={2}
        handleClick={clickHandler}
      />
      <Card
        title="Completed"
        tasks={completedTasks}
        add={false}
        type={3}
        handleClick={clickHandler}
      />
    </div>
  );
};

export default CardContainer;
