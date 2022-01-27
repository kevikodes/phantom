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
  } catch (error) {
    console.log(error.message);
  }
};

//Connect meta mask wallet
export const handleAuth = async (connectWallet) => {
  try {
    await connectWallet("injected");
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.log(error);
  }
};

//Connect metamask wallet
export const handleWalletConnect = async (connectWallet) => {
  try {
    await connectWallet("injected");
  } catch (error) {
    console.log(error);
  }
};
