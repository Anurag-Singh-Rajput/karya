import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div>
        <h1>kaरya</h1>
      </div>
      <ul>
        <li className={classes.navbar__li}>Projects</li>
        <li className={classes.navbar__li}>Notes</li>
        <li className={classes.navbar__li}>Statistics</li>
      </ul>
    </div>
  );
};
export default Navbar;
