import "./App.css";
import { useEffect, useState } from "react";
import { auth, provider } from "./utils/firebase/firebase.config";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { handleAuth, handleLogout } from "./utils/firebase/auth";

//Import thirdweb dependencies
import { useWeb3 } from "@3rdweb/hooks";

function App() {
  //useStates
  const [walletAddress, setWalletAddress] = useState("");
  const [user, setUser] = useState({});

  //Use thirdweb hook
  const { address, connectWallet } = useWeb3();

  //Check for user logged in or out
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsub;
  }, [user]);

  //Check address

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello World</h1>
      {!user && (
        <>
          <h1
            style={{ fontSize: "1.4rem", padding: "20px", fontWeight: "800" }}
          >
            Login
          </h1>
          <button
            style={{
              margin: "20px",
              border: "2px solid black",
              padding: "8px",
            }}
            onClick={() => handleAuth(connectWallet)}
          >
            Connect Wallet!
          </button>
          <br />
          <span>You will also be prompted to log in to google**</span>
        </>
      )}
      {user && address && (
        <>
          <h1>Welcome, {user.displayName}</h1>
          <h2>Your address is {address}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
      {!address && user && (
        <>
          <h1>Please connect Your wallet!</h1>
          <button onClick={() => handleAuth(connectWallet)}>
            Connect Wallet
          </button>
        </>
      )}
    </div>
  );
}

export default App;
