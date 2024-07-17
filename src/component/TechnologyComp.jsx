import React from 'react'

const TechnologyComp = ({ title, content,distance,travel }) => {
  return (
    <>
      <h2 className="font-Bellefair text-white_custom capitalize w-full text-4xl font-bold">
        {title}
      </h2>
      <p className="mt-4 lg:max-w-lg text-secondary mb-5 max-xl:m-5">{content}</p>
      <hr class="border-secondary opacity-30"></hr>
     
    </>
  )
}

export default TechnologyComp;
