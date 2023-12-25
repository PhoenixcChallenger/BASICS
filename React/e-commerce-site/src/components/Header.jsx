import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPageCount } from "../features/paginationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { isVisibleAction } from "../features/addtocartSlice";

// import { useEffect, useState } from "react";


function Header(props) {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.addtocart.totalQuantity);
  const cartItem = useSelector((state) => state.addtocart.items);
  let sum = 0;
  cartItem.map((item) => {
    return (sum += (item.price * item.quantity));
  })

  return (
    <div>
      <header
        className="px-8 py-4"
        style={{ backgroundColor: `${props.background}` }}
      >
        <nav className="grid grid-cols-2 ">
          <div className="flex items-center">
            <div className="flex">
              <a href="/">
                <img
                  src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"
                  alt="logo"
                  className="w-36"
                ></img>
              </a>
            </div>
            <div>
              <ul className="flex">
                <li className="px-5 cursor-pointer transition ease-in-out delay-75 hover:text-nature-green" style={{ color: `${props.everythingColor}` }}>
                  <Link to="/product-category/shop" onClick={dispatch(setPageCount(1))}>Everything</Link>
                </li>
                <li className="px-5 cursor-pointer transition ease-in-out delay-75 hover:text-nature-green" style={{ color: `${props.groceryColor}` }}>
                  <Link to="/product-category/grocery" onClick={dispatch(setPageCount(1))}>Groceries</Link>
                </li>
                <li className="px-5 cursor-pointer transition ease-in-out delay-75 hover:text-nature-green" style={{ color: `${props.juiceColor}` }}>
                  <Link to="/product-category/juice" onClick={dispatch(setPageCount(1))}>Juice</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div>
              <ul className="flex">
                <li className="px-5 transition ease-in-out delay-75 hover:text-nature-green cursor-pointer" style={{ color: `${props.aboutColor}` }}>
                  <Link to="/about">About</Link>
                </li>
                <li className="px-5 transition ease-in-out delay-75 hover:text-nature-green cursor-pointer" style={{ color: `${props.contactColor}` }}>
                  <a href="/contact">Contact</a>
                </li>
                <li className="px-5">

                  <button className="flex" onClick={() => { dispatch(isVisibleAction(true)) }}>
                    <div className="mr-2 text-nature-green font-bold">
                      {
                        totalQuantity && cartItem ? (
                          <p>£{sum}.00</p>
                        ) : (<p>£0.00</p>)
                      }
                    </div>
                    <div className="relative" >
                      <FontAwesomeIcon icon={faCartShopping} style={{ color: "#8bc34a", }} />
                      <span className="h-4 w-4 rounded-full bg-nature-green flex items-center justify-center absolute top-[-5px] left-3 drop-shadow-2xl">
                        <p className="font-bold text-sm">{totalQuantity}</p>
                      </span>
                    </div>
                  </button>

                </li>
                <li className="px-5">
                  <a href="/login">
                    <img
                      src={require("../images/user.png")}
                      className="h-5 w-5"
                      alt=""
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;