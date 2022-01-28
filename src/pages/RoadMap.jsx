import React from "react";
import RoadmapCard from "../components/RoadmapCard";
import MobileRoadmap from "../components/MobileRoadmap";
import { useState, useEffect } from "react";
const RoadMap = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      return window.addEventListener("resize", handleResize);
    };
    return handleResize();
  });

  return <>{isMobile ? <MobileRoadmap /> : <RoadmapCard />}</>;
};

export default RoadMap;
