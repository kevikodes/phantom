import React from "react";
import { Navigate } from "react-router-dom";
import Counter from "../components/Counter";
import Mint from "../components/Mint";
import "./home.css";
import { useWeb3 } from "@3rdweb/hooks";
import { signInWithGoogle } from "../utils/firebase/auth";

const Home = ({ openseaURL, user }) => {
  const { address, connectWallet } = useWeb3();
  console.log(openseaURL);
  return (
    <div className="home">
      <div className="homeTitle">Get your very own Phantom NFT!</div>
      <div className="homeContainer">
        {!user && !address && (
          <div className="clock">
            <Counter />
          </div>
        )}

        {/* {!user && !address && (
  <div className="homeImage">
    <img src="images/ptm.png" alt="" height="50px" width="50px" />
  </div>
)} */}

        <div className="mintCard">{address && user && <Mint />}</div>
        {!user && !address && <p className="minting">Until NFT releases!</p>}

        <form className="email">
          <p className="join">Join our whitelist today to be notified!</p>
          <div>
            <input type="text" placeholder="ex: myname@example.com"></input>
            <button className="submitButton" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
