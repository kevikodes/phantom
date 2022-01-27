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
      <div className="homeTitle">Mint your very own Phantom NFT!</div>
      <div className="homeImage">
        <img src="images/ptm.png" alt="" />
      </div>
      {true && (
        <div className="clock">
          <Counter />
        </div>
      )}
      <div className="mintCard">{false && <Mint />}</div>
      <p className="minting">Until minting starts!</p>
      <p className="join">Join our waitlist today to be notified!</p>{" "}
      <form className="email">
        <input type="text" placeholder="ex: myname@example.com"></input>
        <button className="submitButton" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
