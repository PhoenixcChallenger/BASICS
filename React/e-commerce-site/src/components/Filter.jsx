import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MultiRangeSlider from "./MultiRangeSlider/MultiRangeSlider";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPageCount } from "../features/paginationSlice";

const Filter = (props) => {
  const dispatch = useDispatch();
  const sideProducts = props.products;

  return (
    <>
      <div className="mt-16 pr-[3.75rem] border-r-2 border-gray-300">
        <div className="mb-10">
          <form action="" method="get">
            <div className="flex">
              <label htmlFor="searchName"></label>
              <input
                type="search"
                id="searchName"
                name="searchName"
                placeholder="Search products..."
                className="px-[0.5rem] py-[0.375rem] border-[1px] border-slate-300"
              />
              <button className="bg-[#6a9739] text-xl ml-2 rounded-sm px-2 py-2">
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
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />

          </div>
        </div>
        <div className="flex flex-col">
          <ul>
            <li className="pl-2 text-[#8bc34a] mb-[10px]"><Link to="/product-category/grocery" onClick={dispatch(setPageCount(1))}>Groceries</Link></li>
            <li className="pl-2 text-[#8bc34a] mb-[10px]"><Link to="/product-category/juice" onClick={dispatch(setPageCount(1))}>Juices</Link></li>
          </ul>
        </div>
        <div>
          {sideProducts.map((product) => {
            return (<>
              <div className="flex flex-col">
                <a href="/">
                  <img src={require(`../images/products/${product.image}`)} alt={`${product.image}`} className="h-60 w-60 mb-2" />
                  <h1 className="text-[#8bc34a] cursor-pointer">{product.name}</h1>
                  <p className="mb-4 font-light">£{product.price}</p>
                </a>
              </div>
            </>)
          })}
        </div>
      </div>

    </>
  );
};

export default Filter;
