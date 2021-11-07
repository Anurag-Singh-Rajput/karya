import classes from "./CreateNote.module.css";

const CreateNote = () => {
  return (
    <div className={classes.form__container}>
      <form>
        <input name="title" placeholder="Enter title for your note" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>+</button>
      </form>
    </div>
  );
};

export default CreateNote;
