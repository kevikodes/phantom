import React from "react";
import "../styles/new.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const data = [];

function Functional() {
  return (
    <>
    <div>
      <Navbar />

      <div className="header">
        <h3>Functional Sections </h3>
      </div>

      <section>
        <div className="article">
          {/* <h1>Contact Me</h1>

          <p>Team One - October Cohort</p> */}
          <p>
            <img src="./images/6.png"  alt="Bitcoin info" />
          </p>

          {/* <p>
            <img src="./images/2.png" />
          </p>
          <p>
            <img src="./images/3.png" />
          </p>
          <p>
            <img src="./images/4.png" />
          </p> */}
        </div>
</section>
  

      </div>
    </>
  );
}

export default Functional;
