import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter";
import ProductsContainer from "../../components/ProductsContainer";
import { products } from "../../store-data/Allproduct";
import { useDispatch } from "react-redux";
import { searchFilterAction } from "../../features/filterProductsSlice";

const Juice = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchFilterAction([]));
  }, [dispatch])
  const filteredProducts = products.filter((product) => {
    return (product.title === "Juice")
  })
  const juiceDesc = () => {
    return (
      <div className='mb-10'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim, velit et luctus interdum, est quam scelerisque tellus, eget luctus mi diam vitae erat. Praesent porttitor lacus vitae dictum posuere. Suspendisse elementum metus ac dolor tincidunt, eu imperdiet nisi dictum.</p>
      </div>
    )
  }
  const filterSideProducts = [products[7], products[5], products[10]];
  return (
    <>
      <Header background={"#FFFFFF"} juiceColor={"#8BC34A"} />
      <div className="bg-content-background">
        <div className="flex flex-col-reverse lg:flex-row max-w-[1260px] m-auto">
          <Filter sideProducts={filterSideProducts} products={filteredProducts} />
          <div>
            <ProductsContainer heading={"Juice"} products={filteredProducts} desc={juiceDesc()} />
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Juice;
