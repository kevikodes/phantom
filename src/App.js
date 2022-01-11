import "./App.css";
import { useEffect, useState } from "react";
import { auth, provider } from "./utils/firebase/firebase.config";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { signUpWithGoogle, handleLogout } from "./utils/firebase/auth";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsub;
    console.log(user);
  }, [user]);
  return (
    <div className="App">
      <button
        style={{ border: "2px solid black", margin: "20px", padding: "10px" }}
      >
        Connect MetaMask Wallet
      </button>
      {!user && (
        <button
          style={{ border: "2px solid black", margin: "20px", padding: "10px" }}
          onClick={signUpWithGoogle}
        >
          Sign in with google
        </button>
      )}
      {user && (
        <button
          style={{ border: "2px solid black", margin: "20px", padding: "10px" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default App;
