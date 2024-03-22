import React from "react";
import Challenges from "./FeaturedChallenges";

import "./Main.css";
import RecentActivity from "./RecentActivity";
import Carousel from "../Carousel/Carousel";
const Main = () => {
  return (
    <div className="main-grid">
      <Challenges />
      <RecentActivity />
      <Carousel />
    </div>
  );
};

export default Main;
