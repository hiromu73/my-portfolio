import React from "react";
import PortfolioSwiper from "./PortfolioSwiper";

const Portfolio = () => {
  return (
    <div className="text-center w-5/6">
      <h2 className="font-bold text-2xl mb-5">Portfolio</h2>
      <div className="flex items-center space-x-4 p-4 gap-10 bg-amber-100 rounded-xl">
        <PortfolioSwiper />
      </div>
    </div>
  );
};

export default Portfolio;
