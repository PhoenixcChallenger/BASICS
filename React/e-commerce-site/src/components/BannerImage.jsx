import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function BannerImage() {
  return (
    <div className="relative">
      <div className="before:content-[''] before:bg-[url('https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png')] before:right-0 before:bottom-0 before:absolute before:h-[383px] before:w-[485px] before:bg-no-repeat before:bg-contain before:opacity-30">
        <div className="bg-content-background">
          <section className="py-32 max-w-[1200px] m-auto ">
            <div className="flex">
              <div>
                <img
                  src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png"
                  alt="hero_banner_image"
                ></img>
              </div>
              <div className="flex pl-20 flex-col">
                <div>
                  <img
                    src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h2 className="text-xl my-5 font-merriweather">Best Quality Products</h2>
                </div>
                <div>
                  <h1 className="text-6xl my-5 font-semibold ">Join The Organic Movement!</h1>
                </div>
                <div className="mb-10">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
                <div className="flex w-40 bg-[#6a9739] py-3 px-5 rounded-md cursor-pointer hover:bg-[#8bc34a] transition ease-linear delay-100 items-center">
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
