import React from "react";
import { foodData } from "../store-data/FoodData";
import FoodCard from "./FoodCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlay } from "@fortawesome/free-solid-svg-icons";
const FoodPreview = () => {
  return (
    <>
      <div className="bg-content-background">
        <div className="flex flex-col lg:flex-row m-auto max-w-[1200px] py-24 justify-around">
          {foodData.map((foodItem) => {
            return (
              <FoodCard
                title={foodItem.title}
                desc={foodItem.desc}
                key={foodItem.key}
                image={require(`../images/${foodItem.image}`)}
              />
            );
          })}
        </div>
        <div className="bg-black w-full">
          <div className="h-40 m-auto flex flex-col md:flex-row justify-center md:justify-around items-center">
            <p className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl font-serif md:pl-10">
              Get 25% Off On Your First Purchase!
            </p>
            <div className="flex mt-4 md:mt-0 w-40 h-10 bg-[#6a9739] mx-10 py-3 px-6 rounded-md cursor-pointer hover:bg-[#8bc34a] transition ease-linear delay-100 items-center">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#ffffff" }}
              />
              <button className=" text-white font-medium w-40">SHOP NOW</button>
            </div>
          </div>

        </div>
        <div className="relative">
          <div className="flex justify-center absolute -top-3 left-1/2">
            <FontAwesomeIcon icon={faPlay} rotation={90} size="2xl" style={{ color: "#000000" }} />
          </div>
        </div>

        <div className="flex justify-center text-center">
          <p className="text-2xl p-10 font-serif font-semibold">Try It For Free. No Registration Needed.</p>
        </div>
      </div>
    </>
  );
};

export default FoodPreview;
