import React from "react";
import "./navbar.css";

import { handleAuth, signInWithGoogle } from "../utils/firebase/auth";
import { useWeb3 } from "@3rdweb/hooks";
const Navbar = ({ user, walletAddress }) => {
  const { connectWallet } = useWeb3();
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <h1 className="logo">Phantom</h1>
      </div>
      <div className="navbarRight">
        <div className="navMenu">
          <div className="navMenuItem">Home</div>
          <div className="navMenuItem">Whitepaper</div>
          <div className="navMenuItem">Blog</div>
          <div className="navMenuItem">FAQ's</div>

          {!user && !walletAddress && (
            <>
              <div
                className="navMenuItem loginBtn"
                onClick={() => handleAuth(connectWallet)}
              >
                Login
              </div>
            </>
          )}
          {!user && walletAddress && (
            <>
              <div className="navMenuItem loginBtn" onClick={signInWithGoogle}>
                Sign In with Google
              </div>
            </>
          )}
          {!walletAddress && user && (
            <>
              <div
                className="navMenuItem loginBtn"
                onClick={() => handleAuth(connectWallet)}
              >
                Connect Wallet!
              </div>
            </>
          )}
          {walletAddress && user && (
            <>
              <i className="fas fa-user-circle navAvatar navMenuItem"></i>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
