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
  return (
    <div className={classes.container}>
      <Card title="Tasks" tasks={plan} add={true} />
      <Card title="Ongoing" tasks={ongoing} add={false} />
      <Card title="Completed" tasks={completed} add={false} />
    </div>
  );
};

export default CardContainer;
