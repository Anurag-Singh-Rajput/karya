import Greeting from "./Greeting/Greeting";
import User from "./User/User";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={classes.header}>
      <Greeting name={props.name} />
      <User name={props.name} />
    </div>
  );
};

export default Header;
