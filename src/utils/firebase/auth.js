import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase.config";

//Sign in with google
export const signUpWithGoogle = async () => {
  try {
    console.log("sign up with google");
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.log(error.message);
  }
};

//Logout user
export const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};
