import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

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
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <NavLink to="/" className="logo">
            Phantom
          </NavLink>
        </div>
        <div className="navbarRight">
          <div className="navMenu">
            <NavLink to="/" className={`navMenuItem`}>
              Home
            </NavLink>
            <NavLink to="/roadmap" className={`navMenuItem`}>
              Roadmap
            </NavLink>
            <NavLink to="/news" className={`navMenuItem`}>
              News
            </NavLink>
            <NavLink to="/faqs" className={`navMenuItem`}>
              FAQ's
            </NavLink>

            {!user && !walletAddress && (
              <>
                <div
                  className="navMenuItem loginBtn"
                  onClick={() => handleAuth(connectWallet)}
                >
                  MetaMask Login
                </div>
              </>
            )}
            {/* {!user && walletAddress && (
            <>
              <div className="navMenuItem loginBtn" onClick={signInWithGoogle}>
                Sign In With Google
              </div>
            </>
          )} */}
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
                <div
                  className="navMenuItem loginBtn"
                  onClick={() => handleLogout(disconnectWallet)}
                >
                  Logout
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
