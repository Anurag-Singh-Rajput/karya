import classes from "./Greeting.module.css";

const Greeting = (props) => {
  return (
    <div className={classes.greeting}>
      <h3>Hello, {props.name.split(" ")[0]}</h3>
      <h1>You have</h1>
      {/* <h1>3 tasks due today</h1> */}
      <h1>total of 3 projects !</h1>
    </div>
  );
};

export default Greeting;
