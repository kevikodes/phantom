import React from "react";

import "../styles/new.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// #13 Create Logout function

function About() {
  return (
    <>
    <Navbar />

      <div className="header">
               <h3> TeamOne Members</h3>
      </div>


      <section>
        <div className="article">
        <h1>Team One</h1>
        <p>/ ................................................................................ /</p>
        <p>James Avakaian</p>
        <p>Knowledge of building RESTful web services</p>
        <p>Kevin Owens - Firebase and thirdweb sdk </p>
        <p>Knowledge of building RESTful web services</p>
        <p>/ ................................................................................ /</p>
        <p>Charnice </p>
        <p>Knowledge of building RESTful web services</p>
        <p>Kevin Owens - Firebase and thirdweb sdk </p>
        <p>Knowledge of building RESTful web services</p>
        <p>Experience working with enterprise technology platforms.</p>
        <p>/ ................................................................................ /</p>
        <p>Sam - Front/firebase/auth </p>

        <p>Strong communication, presentation, and advisory skills</p>
        <p>Possess a strong technical background</p>
        <p>Willingness to work as a remote resource</p>
        <p>/ ................................................................................ /</p>
        </div>
      </section>

    </>
  );
}

export default About;
