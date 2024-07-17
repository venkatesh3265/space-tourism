import React from "react";

const DesChanges = ({ title, content,distance,travel }) => {
  return (
    <>
      <h2 className="font-Bellefair text-white_custom capitalize text-8xl lg:max-w-lg font-bold">
        {title}
      </h2>
      <p className="mt-4 lg:max-w-lg text-secondary m-5 max-xl:m-5 lg:m-0">{content}</p>
      <hr class="border-secondary w-full my-6 opacity-60"></hr>
      <div className="text-white_custom font-Barlow_Condensed flex w-full px-10 py-7 capitalize text-xl lg:p-0 lg:py-10">
        <div className="flex-1">
          <p className="text-secondary">AVG.DISTANCE</p>
          <p>{distance}</p>
        </div>
        <div>
          <p className="text-secondary">Est. travel time</p>
          <p>{travel}</p>
        </div>
      </div>
    </>
  );
};

export default DesChanges;
