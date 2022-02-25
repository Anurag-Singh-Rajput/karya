import React, { useEffect, useState } from "react";
import classes from "./NoteApp.module.css";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import {
  doc,
  collection,
  query,
  getDocs,
  getFirestore,
  deleteDoc,
} from "firebase/firestore";
const NoteApp = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialNotes, setNotes] = useState([
    {
      title: "This is title 1",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
      noteId: "0",
    },
    {
      title: "This is title 2",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
      noteId: "1",
    },
    {
      title: "This is title 2",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
      noteId: "2",
    },
    {
      title: "This is title 2",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
      noteId: "3",
    },
  ]);
  const setVariables = () => {
    const db = getFirestore();
    const q = query(collection(db, "db/" + props.uid + "/notes"));
    const querySnapshot = getDocs(q);
    const newNotes = [];
    Promise.resolve(querySnapshot).then((data) =>
      data.docs.map((ele) => {
        initialNotes.push({
          title: ele._document.data.value.mapValue.fields.title.stringValue,
          text: ele._document.data.value.mapValue.fields.content.stringValue,
          noteId: ele._document.key.path.segments[8],
        });
      })
    );
    // console.log(newNotes);
    // const newNote = [...initialNotes, ...newNotes];
    // console.log(newNote);
    // setNotes(newNote);
    // console.log(initialNotes);
    setIsLoading(false);
  };

  // console.log(initialNotes);
  // const querySnapshot = getDocs(collection(db, "db/" + props.uid + "/notes"));
  // console.log(querySnapshot);
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  // });
  const onDelete = (id) => {
    const newNote = initialNotes.filter((note) => note.noteId !== id);
    if (id.length > 2) {
      const db = getFirestore();
      deleteDoc(doc(db, "db/" + props.uid + "/notes/" + id));
    }
    setNotes(newNote);
  };
  return !isLoading ? (
    <>
      <div className={classes.header}>Notes</div>
      <CreateNote setNotes={setNotes} uid={props.uid} />
      <Notes notes={initialNotes} onDelete={onDelete} />
    </>
  ) : (
    setVariables()
  );
};

export default NoteApp;
