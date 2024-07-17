import React, { useState } from "react";
import europa from "../assets/destination/image-europa.png";
import moon from "../assets/destination/image-moon.png";
import DesChanges from "../component/DesChanges";
import { technology } from "../constants";
import TechnologyComp from "../component/TechnologyComp";
import useTransition from "../hook/useTransition";
const Technology = () => {
  const [destinationcontent, setdestinationContent] = useState(technology[0]);
  const transition = useTransition();
  return (
    <section className={` ${transition} transform transition-all duration-150 ease-out  flex justify-center items-center flex-col lg:flex-row-reverse max-container gap-12 mt-10`}>
      <div className="flex-1 mt-5">
        <img
          src={destinationcontent.img}
          className="object-contain mt-8 w-full sm:w-[400px] sm:h-[400px]"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="py-10 text-white_custom font-Barlow_Condensed lg:text-4xl text-xl font-thin">
          {" "}
          <spna className={`font-bold px-6 `}>03</spna>SPACE LAUNCH 101{" "}
        </h2>
        <div className="flex flex-1 flex-col lg:flex-row">
          <div className="flex justify-center items-center flex-row lg:flex-col ">
            {technology.map((item) => (
              <div
                className={`font-Barlow_Condensed w-[50px] flex items-center justify-center  h-[50px] m-3 rounded-full p-5 cursor-pointer ${
                  item.id === destinationcontent.id
                    ? "text-black bg-white_custom "
                    : "text-white_custom border border-sky-500"
                }`}
                onClick={() => setdestinationContent(item)}
              >
                <span className="items-end justify-center"> {item.id}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center  flex-col mx-9 ">
            <TechnologyComp
              title={destinationcontent.text}
              content={destinationcontent.content}
              distance={destinationcontent.distance}
              travel={destinationcontent.travel}
            />
          </div>
          <div className="mt-11 flex flex-wrap gap-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
