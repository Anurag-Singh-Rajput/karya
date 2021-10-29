import Greeting from "./Greeting/Greeting";
import User from "./User/User";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <Greeting />
      <User />
    </div>
  );
};

export default Header;
