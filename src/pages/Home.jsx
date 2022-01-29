import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Counter from "../components/Counter";
import Mint from "../components/Mint";
import "../styles/home.css";
import { useWeb3 } from "@3rdweb/hooks";
import { signInWithGoogle } from "../utils/firebase/auth";
import moment from "moment";
import Clock from "react-live-clock";

const Home = ({ openseaURL, user }) => {
  const { address, connectWallet } = useWeb3();
  const [time, setTime] = useState(Date.now() / 1000);

  //timestamp for when the user will be able to mint
  let release = parseInt(
    moment("2022-01-28 20:47:00", "YYYY-MM-DD HH:mm:ss").unix().toFixed(3) *
      1000
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="home">
      <div className="homeTitle">Get your very own Phantom NFT!</div>
      <div className="homeContainer">
        <Clock
          style={{ color: "white" }}
          format={"MMMM Mo, YYYY, h:mm:ss A"}
          ticking={true}
          timezone={"US/Pacific"}
        />
        <div className="mintCard">
          {address && (
            <div className="connectedWallet">
              <h2>Current Wallet Connected:</h2>
              <p>{address}</p>
            </div>
          )}
        </div>
        {console.log(time, release)}

        {address && user && time >= release && (
          <div className="mintCard">
            <Mint openseaURL={openseaURL} user={user} />
          </div>
        )}

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
        {user && !address && (
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
            <button
              onClick={() => connectWallet("injected")}
              className="googleAlertButton"
            >
              Connect Meta Mask Wallet
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
