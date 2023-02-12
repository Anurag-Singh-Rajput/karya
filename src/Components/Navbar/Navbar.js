import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Navbar = (props) => {
  const logoutHandler = () => {
    localStorage.clear("user");
    localStorage.clear("name");
    localStorage.clear("isUserLoggedIn");
    localStorage.clear("uid");
  };
  const handleNotes = () => {
    props.setProject(false);
    props.setNote(true);
    props.setOpen(false);
  };
  const handleProjects = () => {
    props.setNote(false);
    props.setProject(true);
    props.setOpen(false);
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__title}>
        <h1>kaरya</h1>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={classes.navbar__title_icon}
          onClick={() => {
            props.setOpen(false);
            console.log("clicked");
          }}
        />
      </div>
      <ul>
        <li className={classes.navbar__li} onClick={handleProjects}>
          Projects
        </li>
        <li className={classes.navbar__li} onClick={handleNotes}>
          Notes
        </li>
      </ul>
      <div className={classes.navbar__logout} onClick={logoutHandler}>
        Logout
      </div>
    </div>
  );
};
export default Navbar;
