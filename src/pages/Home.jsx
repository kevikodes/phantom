import React from "react";
import Counter from "../components/Counter";
import Mint from "../components/Mint";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeTitle">Mint your very own Phantom NFT!</div>
      {true && <Counter />}
      <div className="mintCard">{true && <Mint />}</div>
    </div>
  );
};

export default Home;
