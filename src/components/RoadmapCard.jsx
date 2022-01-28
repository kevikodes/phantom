import React from "react";
import "../styles/roadmap.css";

const RoadmapCard = () => {
  return (
    <div className="roadmapWrapper">
      <h1 className="roadmapTitle">Company Roadmap</h1>
      <div className="container">
        <div className="roadmap">
          <div className="road-map"></div>
        </div>
        <section className="timeline-wrapper">
          <div className="middle-line"></div>

          <div className="box box-top">
            <div className="date"></div>
            <div className="box-content">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p id="date1">Jul 1, 2021</p>
            </div>
          </div>

          <div className="box box-bottom">
            <div className="date"></div>
            <div className="box-content">
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <p id="date1">Jun 1, 2021</p>
            </div>
          </div>

          <div className="box box-top">
            <div className="date"></div>
            <div className="box-content">
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <p id="date1">May 1, 2021</p>
            </div>
          </div>

          <div className="box box-bottom">
            <div className="date"></div>
            <div className="box-content">
              <p id="date1">Apr 1, 2021</p>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>

          <div className="box box-top">
            <div className="date"></div>
            <div className="box-content">
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <p id="date1">Mar 1, 2021</p>
            </div>
          </div>

          <div className="box box-bottom">
            <div className="date"></div>
            <div className="box-content">
              <p id="date1">Feb 1, 2021</p>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>

          <div className="box box-top">
            <div className="date"></div>
            <div className="box-content">
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <p id="date1">Jan 1, 2021</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoadmapCard;
