import classes from "./Landing.module.css";
import { firebase } from "../../Firebase/firebase";
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
const Landing = () => {
  const signInWithGoogle = () => {
    console.log("here");
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
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
      <div>
        <h1>Hello World</h1>
        <button onClick={signInWithGoogle}>Sign In</button>
      </div>
    </>
  );
};

export default Landing;
