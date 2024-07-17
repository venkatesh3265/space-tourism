import React, { useEffect, useState } from "react";
import douglas from "../assets/crew/image-douglas-hurley.png";
import { crewMember } from "../constants";
const CrewSlider = () => {
  const [memberState, setmember] = useState(crewMember[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextMember = () => {
    const nextIndex = (currentIndex + 1) % crewMember.length;
    setCurrentIndex(nextIndex);
    setmember(crewMember[nextIndex]);
  };

  // Use effect for setting up the automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextMember();
    }, 5000); // Change crew member every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);
  return (
    <>
      <div className="flex-1 mt-5 text-center lg:text-left">
        <div className="flex flex-col-reverse lg:flex-col">
          <div>
            <p className="text-2xl font-Bellefair text-white_custom opacity-70">
              {memberState.position}{" "}
            </p>
            <h1 className="text-3xl lg:text-6xl font-Bellefair text-white_custom my-10 ">
              {memberState.name}
            </h1>
            <p className="mt-4 lg:max-w-lg text-secondary mb-5 max-xl:m-5">
              {memberState.content}
            </p>
          </div>
          <div className="cursor-pointer py-3">
            {crewMember.map((member) => (
              <span
                className={`inline-block  w-[10px] h-[10px] mx-2 rounded-full cursor-pointer ${
                  member.id === memberState.id
                    ? "bg-white_custom"
                    : "bg-gray-600"
                }`}
                onClick={() => setmember(member)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 my-5 ">
        <img
          src={memberState.img}
          className="object-contain  w-[300px] h-[300px] sm:w-[569px] sm:h-[700px]"
        />
      </div>
    </>
  );
};

export default CrewSlider;
