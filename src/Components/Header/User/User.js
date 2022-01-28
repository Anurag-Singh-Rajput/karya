import classes from "./User.module.css";

const User = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.user__icon}>🔔</div>
      <div className={classes.user__dp}>
        <span>A</span>
      </div>
      <div className={classes.user__info}>{props.name}</div>
    </div>
  );
};

export default User;
