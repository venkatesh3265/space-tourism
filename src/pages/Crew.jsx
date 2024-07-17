import React from "react";
import CrewSlider from "../component/CrewSlider";
import useTransition from "../hook/useTransition";
const Crew = () => {
  const transition = useTransition();
  return (
    <>
      <h2 className={` ${transition} transform transition-all duration-150 ease-out  text-white_custom font-Barlow_Condensed lg:text-4xl text-xl font-thin my-[0px] mx-[10%]`}>
        {" "}
        <span className={`font-bold px-6 `}>02</span>MEET YOUR CREW{" "}
      </h2>
      <section className={` ${transition} transform transition-all duration-150 ease-out  flex justify-center items-center flex-col-reverse md:flex-col lg:flex-row max-container gap-12`}>
        <CrewSlider />
      </section>
    </>
  );
};

export default Crew;
