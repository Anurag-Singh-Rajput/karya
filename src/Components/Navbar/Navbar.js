import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__title}>
        <h1>kaरya</h1>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={classes.navbar__title_icon}
        />
      </div>
      <ul>
        <li className={classes.navbar__li}>Projects</li>
        <li className={classes.navbar__li}>Notes</li>
        <li className={classes.navbar__li}>Statistics</li>
      </ul>
      <div className={classes.navbar__logout}>Logout</div>
    </div>
  );
};
export default Navbar;