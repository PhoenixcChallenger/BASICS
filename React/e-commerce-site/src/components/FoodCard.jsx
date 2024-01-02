import React from "react";

const FoodCard = (props) => {
  const imageURL = props.image;
  return (
    <div className="mx-6 bg-white rounded-lg mb-4">
      <div
        className=" flex flex-col bg-contain bg-no-repeat bg-right h-full w-full p-10 shadow-lg rounded-lg"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <h1 className="text-2xl font-semibold mb-2">{props.title}</h1>
        <p className="pb-4">{props.desc}</p>
        <div className="lg:mb-32">
          <button className="bg-[#6a9739] py-2 px-5 rounded-md text-white transition ease-in-out delay-75 hover:bg-[#8bc34a] w-40 font-medium after:content-['_➜']">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
