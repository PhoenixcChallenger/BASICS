import React from "react";

const FoodCard = (props) => {
  const imageURL = props.image;
  return (
    <div className="h-80 w-80 bg-white rounded-lg">
      <div
        className=" flex flex-col bg-contain bg-no-repeat bg-right h-full w-full p-10 shadow-lg rounded-lg"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <h1 className="text-2xl font-semibold mb-2">{props.title}</h1>
        <p className="mb-5">{props.desc}</p>
        <button className="bg-[#6a9739] py-2 px-5 rounded-md text-white transition ease-in-out delay-75 hover:bg-[#8bc34a] w-40 font-medium after:content-['_➜']">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
