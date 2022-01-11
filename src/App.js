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
      <h1>Firebase</h1>
      <button>Connect MetaMask Wallet</button>
      {!user && <button onClick={signUpWithGoogle}>Sign in with google</button>}
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default App;
