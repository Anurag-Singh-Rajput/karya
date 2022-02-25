import { useState } from "react/cjs/react.development";
import Card from "./Card";
import classes from "./CardContainer.module.css";
// const plan = [
//   {
//     title: "Plan out the UI of the app",
//     content:
//       "Random bs go random bs go. The need to create a beautiful user interface",
//   },
//   {
//     title: "Integrate SocketIO",
//     content:
//       "This is where some of the description for the given work would come ....",
//   },
//   // {
//   //   title: "Deployment",
//   //   content: "Deploy the app to make it availaile for the users",
//   // },
// ];
// const ongoing = [
//   {
//     title: "App Plan",
//     content:
//       "Planning of what the app is about and what features would be available",
//   },
// ];
// const completed = [];
const CardContainer = (props) => {
  // const [props.pendingTasks, setPendingTasks] = useState(plan);
  // const [props.ongoingTasks, setOngoingTasks] = useState(ongoing);
  // const [props.completedTasks, setCompletedTasks] = useState(completed);

  const clickHandler = (i, key) => {
    console.log(key);
    if (key === 1) {
      const newNotes = props.pendingTasks.filter((task, index) => {
        if (i === index) {
          const moveTasks = [...props.ongoingTasks, task];
          props.setOngoingTasks(moveTasks);
        } else return task;
      });
      props.setPendingTasks(newNotes);
    } else if (key === 2) {
      const newNotes = props.ongoingTasks.filter((task, index) => {
        if (i === index) {
          const moveTasks = [...props.completedTasks, task];
          props.setCompletedTasks(moveTasks);
        } else return task;
      });
      props.setOngoingTasks(newNotes);
    }
  };

  return (
    <div className={classes.container}>
      <Card
        title="Tasks"
        tasks={props.pendingTasks}
        add={true}
        type={1}
        handleClick={clickHandler}
        setModal={props.setModal}
      />
      <Card
        title="Ongoing"
        tasks={props.ongoingTasks}
        add={false}
        type={2}
        handleClick={clickHandler}
      />
      <Card
        title="Completed"
        tasks={props.completedTasks}
        add={false}
        type={3}
        handleClick={clickHandler}
      />
    </div>
  );
};

export default CardContainer;
