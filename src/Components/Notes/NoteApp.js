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
      title: "This is title 3",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
      noteId: "2",
    },
    {
      title: "This is title 4",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
      noteId: "3",
    },
    {
      title: "This is title 5",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
      noteId: "3",
    },
    {
      title: "This is title 6",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
      noteId: "3",
    },
    {
      title: "This is title 7",
      text: "Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlorem epsum ipsum kopla skdnr Lorem dbfb dlrlore",
      noteId: "3",
    },
  ]);

  useEffect(() => {
    var newNotes = [];
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const q = query(collection(db, "db/" + props.uid + "/notes"));
        const querySnapshot = await getDocs(q);
        await Promise.resolve(querySnapshot).then((data) =>
          data.docs.map((ele) => {
            newNotes.push({
              title: ele._document.data.value.mapValue.fields.title.stringValue,
              text: ele._document.data.value.mapValue.fields.content
                .stringValue,
              noteId: ele._document.key.path.segments[8],
            });
          })
        );
        setNotes([...newNotes, ...initialNotes]);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
    // var finalNotes = [...initialNotes, ...newNotes];
    // console.log(finalNotes);
    // console.log(newNotes);
  }, [props.uid]);

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
    <h1>Loading ...</h1>
  );
};

export default NoteApp;
