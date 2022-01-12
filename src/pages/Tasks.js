import React from "react";
import "../styles/new.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const data = [];

function Tasks() {
  return (
    <>
      <Navbar />

      <div className="header">
        <h3>Task Chart, Initial Design</h3>
      </div>

      <img src="./images/5.png"  alt="Bitcoin info" />
     
      <Footer />
    </>
  );
}

export default Tasks;
