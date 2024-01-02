import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function BannerImage() {
  return (
    <div className="relative">
      <div className="before:content-[''] before:bg-[url('https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png')] before:right-0 before:bottom-0 before:absolute before:bg-no-repeat before:bg-contain before:opacity-30">
        <div className="bg-[#f8f6f3]">
          <section className="py-24 px-4 max-w-[1200px] m-auto ">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="flex items-center flex-1">
                <img
                  src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png"
                  alt="hero_banner_image"
                  className="w-full"
                ></img>
              </div>
              <div className="flex flex-1 md:pl-10 flex-col  items-center md:items-start justify-around text-center md:text-left">
                <div>
                  <img
                    src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
                    alt="leaf"
                  ></img>
                </div>
                <div>
                  <h2 className="text-xl font-merriweather py-2">Best Quality Products</h2>
                </div>
                <div>
                  <h1 className="text-4xl lg:text-6xl font-semibold ">Join The Organic Movement!</h1>
                </div>
                <div>
                  <p className="py-2 text-sm lg:text-xl text-[#333333]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
                <div className="flex w-40 bg-[#6a9739] py-3 px-5 rounded-md cursor-pointer hover:bg-[#8bc34a] transition ease-linear delay-100 items-center mt-4 mb-14">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ color: "#ffffff" }}
                  />
                  <button className=" text-white font-medium w-40">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BannerImage;
