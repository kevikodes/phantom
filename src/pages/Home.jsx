import React from "react";
import { Navigate } from "react-router-dom";
import Counter from "../components/Counter";
import Mint from "../components/Mint";
import "./home.css";
import { useWeb3 } from "@3rdweb/hooks";

const Home = () => {
  const { address, openseaURL } = useWeb3();
  return (
    <div className="home">
      <div className="homeTitle">Mint your very own Phantom NFT!</div>
      {true && <Counter />}
      <div className="mintCard">
        {true && (
          <>
            {address && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="openSeaUrl"
                  onClick={() => (window.location = openseaURL)}
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
      <div style={{ height: "450px" }}></div>
    </div>
  );
};

export default Home;
