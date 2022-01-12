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
          <h3>Wireframe Design </h3>
        </div>

        <section>
          <div className="article">
            <p>
              <img src="./images/1.png" alt="Bitcoin info" />
            </p>

            <p>
              <img src="./images/2.png" alt="Bitcoin info" />
            </p>
            <p>
              <img src="./images/3.png" alt="Bitcoin info" />
            </p>
            <p>
              <img src="./images/4.png" alt="Bitcoin info" />
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Functional;
