import Card from "./Card";
import classes from "./CardContainer.module.css";
const CardContainer = () => {
  return (
    <div className={classes.container}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardContainer;
