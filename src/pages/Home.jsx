import React from "react";
import { Navigate } from "react-router-dom";
import Counter from "../components/Counter";
import Mint from "../components/Mint";
import "./home.css";

const Home = ({ address, openseaURL }) => {
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
    </div>
  );
};

export default Home;
