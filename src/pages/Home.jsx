import React, { useEffect, useState } from "react";
import useTransition from "../hook/useTransition";

const Home = () => {
  const transition = useTransition();
  return (
    <div className={` ${transition} transform transition-all duration-150 ease-out  flex justify-center items-center  p-12 m-5 text-secondary flex-col lg:flex-row`}>
      <div className="flex flex-1 flex-col font-Barlow_Condensed ">
        <h2 className="text-2xl text-center lg:text-left lg:py-5 leading lg:tracking-widest"> SO, YOU WANT TO TRAVEL TO </h2>
        <h2 className="p-5 text-8xl lg:text-10xl max-w-lg  font-Bellefair lg:py-10 inline-block mx-[-20px] text-white_custom">
          SPACE
        </h2>
        <p className="mt-4 text-lg lg:max-w-lg font-Barlow_Condensed text-secondary text-justify tracking-wide w-[327px] lg:w-full">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex flex-1 flex-col font-Barlow_Condensed items-center pt-10 cursor-pointer">
        <div className="button-container bg-white w-40 h-40 lg:w-60 lg:h-60 rounded-full text-black text-3xl flex items-center justify-center button-hover relative">
         <span className="items-end justify-center">EXPLORE</span>

        </div>
      </div>  
    </div>
  );
};

export default Home;
