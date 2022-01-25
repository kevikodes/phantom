import React from "react";
import Counter from "../components/Counter";
import Mint from "../components/Mint";
import "./home.css";
import { useWeb3 } from "@3rdweb/hooks";

const Home = () => {
  const { address } = useWeb3();
  return (
    <div className="home">
      <div className="homeTitle">Mint your very own Phantom NFT!</div>
      {true && <Counter />}
      <div className="mintCard">
        {true && (
          <>
            <Mint />
            <a
              className="opensea-link"
              href={`https://testnets.opensea.io/${address}`}
            >
              Check out your opensea to see your nft!
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
