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
              <p className="boxPara">
                Donate to other projects and expand the community
              </p>
              <p id="date1">Nov 3 2022</p>
            </div>
          </div>

          <div className="box box-bottom">
            <div className="date"></div>
            <div className="box-content">
              <p id="date1">Jul 15 2022</p>
              <p className="boxPara">
                Developer and team members can now create their own projects
              </p>
            </div>
          </div>

          <div className="box box-top">
            <div className="date"></div>
            <div className="box-content">
              <p className="boxPara">
                Create a members only section of the DAO
              </p>
              <p id="date1">Apr 10 2022</p>
            </div>
          </div>

          <div className="box box-bottom">
            <div className="date"></div>
            <div className="box-content">
              <p id="date1">Mar 24 2022</p>
              <p className="boxPara">
                Vote to Donate to the DAO and get a chance to be a part of the
                team
              </p>
            </div>
          </div>

          <div className="box box-top">
            <div className="date"></div>
            <div className="box-content">
              <p className="boxPara">
                First round of the DAO whitelist and voting
              </p>
              <p id="date1">Mar 3 2022</p>
            </div>
          </div>

          <div className="box box-bottom">
            <div className="date"></div>
            <div className="box-content">
              <p className="boxPara">Release of the PhantomDAO</p>
              <p id="date1">Feb 20 2022</p>
            </div>
          </div>

          <div className="box box-top">
            <div className="date"></div>
            <div className="box-content">
              <p className="boxPara">Release first Phantom NFT.</p>
              <p id="date1">Jan 30 2022</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoadmapCard;
