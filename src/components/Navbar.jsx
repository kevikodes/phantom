import React from "react";
import "./navbar.css";

import {
  handleAuth,
  handleLogout,
  signInWithGoogle,
} from "../utils/firebase/auth";
import { useWeb3 } from "@3rdweb/hooks";
const Navbar = ({ user, walletAddress }) => {
  const { connectWallet, disconnectWallet } = useWeb3();
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
                onClick={() => {
                  handleAuth(connectWallet);
                }}
              >
                Login
              </div>
            </>
          )}
          {!user && walletAddress && (
            <>
              <i class="fas fa-wallet navMenuItem navAvatar"></i>

              <div
                className="navMenuItem loginBtn"
                onClick={() => {
                  handleAuth(connectWallet);
                }}
              >
                Sign In with Google
              </div>
            </>
          )}
          {!walletAddress && user && (
            <>
              <div
                className="navMenuItem loginBtn"
                onClick={() => {
                  connectWallet("injected");
                }}
              >
                Connect Wallet!
              </div>
            </>
          )}
          {walletAddress && user && (
            <>
              <div className="rightNavbar">
                <i className="fas fa-user-circle navAvatar navMenuItem"></i>
                <i class="fas fa-wallet navMenuItem navAvatar"></i>
                <div
                  className="navMenuItem loginBtn"
                  onClick={() => {
                    handleLogout(disconnectWallet);
                  }}
                >
                  Logout
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
