import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase.config";

//Sign in with google
export const signInWithGoogle = async () => {
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
    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
};

//Connect meta mask wallet and google
export const handleAuth = async (connectWallet) => {
  try {
    await connectWallet("injected");
    await signInWithPopup(auth, provider);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
