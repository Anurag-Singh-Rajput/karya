import classes from "./Greeting.module.css";

const Greeting = () => {
  return (
    <div className={classes.greeting}>
      <h3>Hello, Anurag</h3>
      <h1>You have</h1>
      <h1>3 tasks due today</h1>
    </div>
  );
};

export default Greeting;
