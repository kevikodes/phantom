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

      {true && <Counter />}
      <div className="mintCard">
        {/* If the the mint release date timer hits 0, the user will be able to
        mint their own NFT */}
        {address && user && (
          <>
            {/* If the user is not logged in and has not connected their wallet,
            don't show the opensea button */}
            {address && user && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="openSeaUrl"
                  onClick={() => (window.location = `${openseaURL}`)}
                >
                  Check out your NFT's
                  <br />
                  <span>on OpenSea!!!</span>
                </button>
              </div>
            )}
            <Mint />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
