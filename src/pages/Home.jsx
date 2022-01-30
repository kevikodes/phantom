import React, { useState, useEffect } from "react";
import Mint from "../components/Mint";
import "../styles/home.css";
import { useWeb3 } from "@3rdweb/hooks";
import { signInWithGoogle, handleAuth } from "../utils/firebase/auth";
import moment from "moment";
import Clock from "react-live-clock";

const Home = ({ openseaURL, user }) => {
  const { address, connectWallet } = useWeb3();
  const [time, setTime] = useState(Date.now() / 1000);

  //timestamp for when the user will be able to mint
  let release = parseInt(
    moment("2022-01-30 12:30:00", "YYYY-MM-DD HH:mm:ss").unix().toFixed(3) *
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
        {/* //Show the live PST clock when the nft is not released yet, otherwise
        show the nft released */}
        {time <= release ? (
          <div className="clockContainer">
            <Clock
              className="clock"
              format={"MMMM DD h:mm:ss A"}
              ticking={true}
              timezone={"US/Pacific"}
            />
          </div>
        ) : (
          <h1
            style={{ fontSize: "2rem", fontFamily: "Sedgwick Ave, cursive" }}
            className="releaseDate"
          >
            The NFT has been released! Get yourself a Phantom!!!
          </h1>
        )}
        {/* //Display the release date if the nft is not released yet */}
        {time <= release && (
          <div className="releaseDate">
            <h2>This NFT releases on January 30th @ 12:30 PM PST!!!!</h2>
          </div>
        )}
        <div className="mintCard">
          {/* //Show the users currently connected account on the page. */}
          {address && (
            <div className="connectedWallet">
              <h2>Current Wallet Connected:</h2>
              <p>{address}</p>
              <a href={openseaURL} target="_blank" rel="noopener noreferrer">
                <button className="opensea-button">Your Opensea Link</button>
              </a>
            </div>
          )}
        </div>
        {/* //Show the mint component if the user is signed in, wallet connected,
        and the release time is true */}
        {address && user && time >= release && (
          <div className="mintCard">
            <Mint openseaURL={openseaURL} user={user} />
          </div>
        )}
        {/* //If the use is not signed in with google but wallet is connected show a
        button to sign into google. */}
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
        {/* //If the user is signed in but the wallet is not connected show a button
        to connect Wallet */}
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
        {/* //show the phantom logo if the release hasnt happened and the user is
        not logged in with wallet or google. */}
        {time <= release && !user && !address && (
          <div className="phantom-logo">
            <img src="images/cropped-ptm.png" alt="phantom logo" />
          </div>
        )}
        {/* //show the phantom logo if the release hasnt happened and the user is
        logged in with wallet or google. */}
        {time <= release && user && address && (
          <div className="phantom-logo">
            <img src="images/cropped-ptm.png" alt="phantom logo" />
          </div>
        )}
        {time >= release && !user && !address && (
          <>
            <div className="phantom-logo">
              <img src="images/cropped-ptm.png" alt="phantom logo" />
            </div>
            <h2 style={{ fontSize: "1.3rem", color: "white" }}>
              You need to Login first!
            </h2>
            <button
              className="googleAlertButton"
              onClick={() => handleAuth(connectWallet)}
            >
              Login
            </button>
          </>
        )}
        <form className="email">
          <p className="join">Join our whitelist today to get early access!</p>
          <div className="inputContainer">
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
