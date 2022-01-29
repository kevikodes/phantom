import React from "react";
import "../styles/mobileroadmap.css";
import "../styles/roadmap.css";

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
              <h2>Jan 30 2022</h2>
              <p>Release first Phantom NFT.</p>
            </div>
          </div>
          <div className="mContainer mRight">
            <div className="mContent">
              <h2>Feb 20 2022</h2>
              <p>Release of the PhantomDAO</p>
            </div>
          </div>
          <div className="mContainer mLeft">
            <div className="mContent">
              <h2>Mar 3 2022</h2>
              <p>First round of the DAO whitelist and voting</p>
            </div>
          </div>
          <div className="mContainer mRight">
            <div className="mContent">
              <h2>Mar 24 2022</h2>
              <p>
                Vote to Donate to the DAO and get a chance to be a part of the
                team
              </p>
            </div>
          </div>
          <div className="mContainer mLeft">
            <div className="mContent">
              <h2>Apr 10 2022</h2>
              <p>Create a members only section of the DAO</p>
            </div>
          </div>
          <div className="mContainer mRight">
            <div className="mContent">
              <h2>Jul 15 2022</h2>
              <p>
                Developer and team members can now create their own projects.
              </p>
            </div>
          </div>
          <div className="mContainer mLeft">
            <div className="mContent">
              <h2>Nov 3 2022</h2>
              <p>Donate to other projects and expand the community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileRoadmap;
