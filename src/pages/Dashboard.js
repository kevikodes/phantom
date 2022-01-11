import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/new.css";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="header">
        <h3>Dashboard </h3>
      </div>
      <div className="Dashboard">
        {/* <div className="container"> */}

        <div className="article">
          <p>
            <img src="./images/10.png" alt="Bitcoin info" />
          </p>
        </div>

       
      </div>
    </>
  );
}

export default Dashboard;
