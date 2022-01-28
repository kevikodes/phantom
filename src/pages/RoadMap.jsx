import React from "react";
import RoadmapCard from "../components/RoadmapCard";
import MobileRoadmap from "../components/MobileRoadmap";
import { useState, useEffect } from "react";
const RoadMap = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  console.log(isMobile);

  return <div>{isMobile ? <MobileRoadmap /> : <RoadmapCard />}</div>;
};

export default RoadMap;
