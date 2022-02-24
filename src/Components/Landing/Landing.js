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
        props.setUser(user);
        props.setName(user.displayName);
        props.setIsLoggedIn(true);
        props.setUid(user.uid);
        localStorage.setItem("isUserLoggedIn", "loggedIn");
        localStorage.setItem("user", user);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("name", user.displayName);
        localStorage.setItem("uid", user.uid);
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
      <h1>Hello World</h1>
      <button onClick={signInWithGoogle}>Sign In</button>
    </>
  );
};

export default Landing;
