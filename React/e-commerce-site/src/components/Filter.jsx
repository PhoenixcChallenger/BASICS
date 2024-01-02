import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MultiRangeSlider from "./MultiRangeSlider/MultiRangeSlider";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchFilterAction } from "../features/filterProductsSlice";

const Filter = (props) => {
  const dispatch = useDispatch();
  let inputValue = '';
  const sideProducts = props.sideProducts;
  const products = props.products;
  function minMax({ min, max }) {
    return (`min = ${min}, max = ${max}`);
  }
  const [filterProducts, setFilterProducts] = useState([]);

  function handleSearch(e) {
    inputValue = e.target.value.toLowerCase();
    const filter = products.filter((product) => {
      return (product.name.toLowerCase().includes(inputValue))
    });
    setFilterProducts(filter);
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(filterProducts);
    dispatch(searchFilterAction(filterProducts));
  }

  return (
    <>
      <div className="mt-16 px-4 lg:pr-[3.75rem] lg:border-r-2 lg:border-gray-300">
        <div className="mb-10">
          <form onSubmit={handleClick}>
            <div className="flex">
              <label htmlFor="searchName"></label>
              <input
                type="search"
                id="searchName"
                name="searchName"
                placeholder="Search products..."
                onChange={handleSearch}
                className="px-[0.5rem] py-[0.375rem] border-[1px] border-slate-300 w-full lg:w-auto"
              />
              <button type="submit" className="bg-[#6a9739] text-xl ml-2 rounded-sm px-2 py-2">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#ffffff" }}
                />
              </button>
            </div>
          </form>
        </div>
        <div className="mb-10">
          <div>
            <h3 className="text-2xl mb-10 font-merriweather">Filter by price</h3>
            <MultiRangeSlider
              min={10}
              max={40}
              onChange={minMax}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <ul>
            <li className="pl-2 text-[#8bc34a] mb-[10px]"><Link to="/product-category/grocery" >Groceries</Link></li>
            <li className="pl-2 text-[#8bc34a] mb-[10px]"><Link to="/product-category/juice" >Juices</Link></li>
          </ul>
        </div>
        <div>
          {sideProducts.map((product) => {
            return (
              <React.Fragment key={product.key}>
                <div className="flex flex-col">
                  <a href="/">
                    <img src={require(`../images/products 300 x 300/${product.smallimage}`)} alt={`${product.image}`} className="h-60 w-60 mb-2" />
                    <h1 className="text-[#8bc34a] cursor-pointer">{product.name}</h1>
                    <p className="mb-4 font-light">£{product.price}</p>
                  </a>
                </div>
              </React.Fragment>)
          })}
        </div>
      </div>

    </>
  );
};

export default Filter;
