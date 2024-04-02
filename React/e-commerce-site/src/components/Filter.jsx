import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import MultiRangeSlider from "./MultiRangeSlider/MultiRangeSlider";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { priceFilterAction, searchFilterAction } from "../features/filterProductsSlice";
import { Range, getTrackBackground } from "react-range";

const Filter = (props) => {

  const dispatch = useDispatch();
  let inputValue = '';
  const sideProducts = props.sideProducts;
  const products = props.products;
  const STEP = 1;
  const MIN = 0;
  const MAX = 40;
  const [filterProducts, setFilterProducts] = useState([]);
  const [values, setValues] = useState([MIN, MAX]);

  // useEffect(() => {
  //   ;
  // }, [values, dispatch]);


  function handleSearch(e) {
    inputValue = e.target.value.toLowerCase();
    const filter = products.filter((product) => {
      return (product.name.toLowerCase().includes(inputValue))
    });
    setFilterProducts(filter);
  }
  function handlePriceFilter(values) {
    setValues(values);
    const priceFilter = products.filter(
      product => product.price >= values[0] && product.price <= values[1]
    );
    console.log(priceFilter);
    setFilterProducts(priceFilter);
    dispatch(priceFilterAction(filterProducts));
  }


  function handleClick(e) {
    e.preventDefault();
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
          <h3 className="text-2xl mb-10 font-merriweather">Filter by price</h3>
          <div className="flex flex-col items-center">
            <Range
              values={values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => handlePriceFilter(values)}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "5px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values: values,
                        colors: ["#ccc", "#8bc34a", "#ccc"],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "16px",
                    width: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#8bc34a",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                </div>
              )}
            />
            <div className="flex w-full justify-between mt-2">
              <div className="p-3 bg-white">
                {values[0]}
              </div>
              <div className="p-3 bg-white">
                {values[1]}
              </div>
            </div>
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
