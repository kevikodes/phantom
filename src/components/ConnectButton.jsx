import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { handleAuth, signInWithGoogle } from "../utils/firebase/auth";

//Import thirdweb dependencies
import { useWeb3 } from "@3rdweb/hooks";

const ConnectButton = () => {
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
  useEffect(() => {
    if (address) {
      setWalletAddress(address);
    }
    console.log(address);
  }, [address]);

  return (
    <div style={{ textAlign: "center" }}>
      {!user && !address && (
        <>
          <span>Please connect Your wallet!</span>
          <br />
          <button onClick={() => handleAuth(connectWallet)}>
            Connect Wallet
          </button>
        </>
      )}
      {user && !address && (
        <>
          <span>Please connect your wallet!</span>
          <br />
          <button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </button>
        </>
      )}
      {!user && address && (
        <>
          <span>Please sign in!</span>
          <br />
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        </>
      )}

      {address && user && (
        <>
          <h1>Welcome {user.displayName}</h1>
          <p>
            Your wallet address is: <br /> {address}
          </p>
        </>
      )}
    </div>
  );
};

export default ConnectButton;
