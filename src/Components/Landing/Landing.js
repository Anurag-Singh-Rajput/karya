import classes from "./Landing.module.css";
import { firebase } from "../../Firebase/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
const Landing = (props) => {
  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem("isUserLoggedIn", "loggedIn");
        localStorage.setItem("user", user);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("name", user.displayName);
        localStorage.setItem("uid", user.uid);
        props.setUser(user);
        props.setName(user.displayName);
        props.setIsLoggedIn(true);
        props.setUid(user.uid);
        console.log("landing");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <>
      <div className={classes.main}>
        <div className={classes.main__container}>
          <h1>karya</h1>
          <p>
            Simple, flexible, and powerful. All it takes are boards, lists, and
            cards to get a clear view of who’s doing what and what needs to get
            doneSimple, flexible, and powerful. No need to start from scratch.
            Jump-start your workflow with a proven playbook designed for
            different teams. Customize it to make it yours.
          </p>
          <button className={classes.btn1} onClick={signInWithGoogle}>
            Sign In
          </button>
          <button className={classes.btn2} onClick={signInWithGoogle}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
