import "./App.css";
import { useEffect, useState } from "react";
import { auth, provider } from "./utils/firebase/firebase.config";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { handleAuth, handleLogout } from "./utils/firebase/auth";

//Import thirdweb dependencies
import { useWeb3 } from "@3rdweb/hooks";
import ConnectButton from "./components/ConnectButton";

function App() {
  return (
    <div>
      <ConnectButton />
    </div>
  );
}

export default App;
