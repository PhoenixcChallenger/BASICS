import React from "react";

const CustomerReview = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="max-w-[1200px] m-auto flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl text-center font-bold mb-8">
            Customers Reviews
          </h1>
          <img
            src={require("../images/logo-leaf-new.png")}
            alt="logo leaf"
            className="w-20 md:mb-20"
          />
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col flex-1 py-10 px-6 bg-white shadow-lg rounded-lg md:mt-24 mx-3">
              <div className="flex justify-center mb-2">
                <span className="text-yellow-400 text-2xl mb-2">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </div>
              <p className="text-gray-700 text-center mb-6 lg:text-lg">
                Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              </p>
              <div className="flex justify-center items-center">
                <img
                  src={
                    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png"
                  }
                  className="h-10 w-10 mr-4"
                  alt="reviewer_image"
                />
                <span className="text-gray-800 text-center">John Doe</span>
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center mx-3">
              <div className="flex flex-col justify-center items-center p-10 h-full bg-[url('https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/sydney-rae-668606-unsplash.jpg')] rounded-lg bg-cover bg-center bg-blend-overlay bg-[#444444] hover:bg-[#222222] transition ease-linear delay-75 shadow-lg">
                <div className="flex flex-col items-center">
                  <h2 className="text-3xl font-serif font-bold text-white text-center mb-7">
                    Deal Of The Day 15% Off On All Vegetables!
                  </h2>
                  <p className="text-white text-center mb-10">
                    I am text block. Click edit button to change this tex em ips.
                  </p>
                </div>
                <button className="bg-[#6a9739] py-2 px-5 rounded-md text-white transition ease-linear delay-75 hover:bg-[#8bc34a] w-40 font-medium after:content-['_➜']">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-1 py-10 px-6 bg-white shadow-lg rounded-lg md:mt-24 mx-3">
              <div className="flex justify-center mb-2">
                <span className="text-yellow-400 text-2xl mb-2">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </div>
              <p className="text-gray-700 text-center mb-6 lg:text-lg">
                Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="flex justify-center items-center">
                <img
                  src={
                    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png"
                  }
                  className="h-10 w-10 mr-4"
                  alt="reviewer_image"
                />
                <span className="text-gray-800 text-center">Jane Smith</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-[1240px] mx-auto mt-20 mb-10">
        <h1 className="text-xl font-semibold">Feactured Brands:</h1>
        <div className="px-2">
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg" alt="logo1" />
        </div>
        <div className="px-2">
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg" alt="logo2" />
        </div>
        <div className="px-2">
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg" alt="logo3" />
        </div>
        <div className="px-2">
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-3.svg" alt="logo4" />
        </div>
        <div className="px-2">
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg" alt="logo5" />
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
