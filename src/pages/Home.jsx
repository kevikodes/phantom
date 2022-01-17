import React from "react";
import Mint from "../components/Mint";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeTitle">Mint your very own Phantom!</div>
      <div className="mintCard">
        <Mint />
      </div>
    </div>
  );
};

export default Home;
