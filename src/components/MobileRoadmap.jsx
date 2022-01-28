import React from "react";
import "./mobileroadmap.css";
import "./roadmap.css";

const MobileRoadmap = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <h1 className="roadmapTitle">Company Roadmap</h1>
      <div className="mRoadContainer">
        <div className="mTimeline">
          <div className="mContainer mLeft">
            <div className="mContent">
              <h2>2017</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="mContainer mRight">
            <div className="mContent">
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="mContainer mLeft">
            <div className="mContent">
              <h2>2017</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="mContainer mRight">
            <div className="mContent">
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="mContainer mLeft">
            <div className="mContent">
              <h2>2017</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="mContainer mRight">
            <div className="mContent">
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="mContainer mLeft">
            <div className="mContent">
              <h2>2017</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="mContainer mRight">
            <div className="mContent">
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileRoadmap;
