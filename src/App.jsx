import "./App.css";

import Navbar from "./components/Navbar";
import React from "react";
import { useEffect, useState } from "react";
import { auth } from "./utils/firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

//Import thirdweb dependencies
import { useWeb3 } from "@3rdweb/hooks";

function App() {
  const { address } = useWeb3();
  const [walletAddress, setWalletAddress] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    console.log(user);
    return unsub;
  }, [user]);
  useEffect(() => {
    if (address) {
      setWalletAddress(address);
    }
    console.log(address);
  }, [address]);
  return (
    <div className="app">
      <Navbar user={user} walletAddress={walletAddress} />
    </div>
  );
}

export default App;
