import React, { useState } from "react";
import europa from "../assets/destination/image-europa.png";
import moon from "../assets/destination/image-moon.png";
import DesChanges from "../component/DesChanges";
import { destinationmenu } from "../constants";
import useTransition from "../hook/useTransition";
const Destination = () => {
  const transition = useTransition();
  const [destinationcontent, setdestinationContent] = useState(
    destinationmenu[0]
  );
  return (
    <section className={` ${transition} transform transition-all duration-150 ease-out  flex justify-center items-center flex-col lg:flex-row max-container gap-12 mt-10`}>
      <div className="flex-1 mt-5">
        <h2 className="text-white_custom font-Barlow_Condensed lg:text-4xl text-xl font-thin">
          {" "}
          <spna className={`font-bold px-6 `}>01</spna>PICK YOUR DESTINATION{" "}
        </h2>
        <img
          src={destinationcontent.img}
          className="object-contain mt-8 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px]"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-center items-center lg:items-start lg:justify-start ">
          {destinationmenu.map((item) => (
            <p
              className={`font-Barlow_Condensed p-5 text-white_custom cursor-pointer ${item.id === destinationcontent.id?'underline':''}`}
              onClick={() => setdestinationContent(item)}
            >
              {item.text}
            </p>
          ))}
        </div>
        <div className="flex justify-center items-center lg:items-start  flex-col"> 
        <DesChanges title={destinationcontent.text} content={destinationcontent.content} distance={destinationcontent.distance} travel={destinationcontent.travel}/>
          
        </div>
        
       
        <div className="mt-11 flex flex-wrap gap-4"></div>
      </div>
    </section>
  );
};
export default Destination;
