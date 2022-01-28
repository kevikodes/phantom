import React from "react";
import { Navigate } from "react-router-dom";
import Counter from "../components/Counter";
import Mint from "../components/Mint";
import "../styles/home.css";
import { useWeb3 } from "@3rdweb/hooks";
import { signInWithGoogle } from "../utils/firebase/auth";

const Home = ({ openseaURL, user }) => {
  const { address, connectWallet } = useWeb3();
  console.log(openseaURL);

  return (
    <div className="home">
      <div className="homeTitle">Get your very own Phantom NFT!</div>
      <div className="homeContainer">
        <div className="mintCard">{address && user && <Mint />}</div>
        {!user && !address && <p className="minting">Until NFT releases!</p>}
        {!user && address && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="images/phantom-sunglasses.png"
              alt="phantom with sunglasses"
              height="300px"
              width="300px"
              style={{ marginBottom: "20px", marginLeft: "30px" }}
            />
            <button onClick={signInWithGoogle} className="googleAlertButton">
              Sign In With Google
            </button>
          </div>
        )}

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
