import "./App.css";
import { useEffect, useState } from "react";
import { auth, provider } from "./utils/firebase/firebase.config";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { signUpWithGoogle, handleLogout } from "./utils/firebase/auth";

//Import thirdweb dependencies
import { useWeb3 } from "@3rdweb/hooks";

function App() {
  //useStates
  const [walletAddress, setWalletAddress] = useState("");
  const [user, setUser] = useState({});

  //Use thirdweb hook
  const { address, chainId, connectWallet } = useWeb3();

  //Check for user logged in or out
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    console.log(user);
    return unsub;
  }, [user]);
  return (
    <div className="App">
      {!user && (
        <>
          <button
            style={{
              border: "2px solid black",
              margin: "20px",
              padding: "10px",
            }}
            onClick={signUpWithGoogle}
          >
            Sign in with google
          </button>
          <button
            style={{
              border: "2px solid black",
              margin: "20px",
              padding: "10px",
            }}
            onClick={() => connectWallet("injected")}
          >
            Connect MetaMask Wallet
          </button>
        </>
      )}
      {user && (
        <button
          style={{ border: "2px solid black", margin: "20px", padding: "10px" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      )}

      {address && user && (
        <>
          <div>Address: {address}</div>
        </>
      )}
    </div>
  );
}

export default App;
