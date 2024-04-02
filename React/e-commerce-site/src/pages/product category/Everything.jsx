import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter";
import ProductsContainer from "../../components/ProductsContainer";
import { products } from "../../store-data/Allproduct";
import { useDispatch } from "react-redux";
import { searchFilterAction } from "../../features/filterProductsSlice";

const Everything = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchFilterAction([]));
  }, [dispatch])
  const filterSideProducts = [products[7], products[5], products[10]];
  return (
    <>
      <Header background={"#FFFFFF"} everythingColor={"#8BC34A"} />
      <div className="bg-content-background">
        <div className="flex flex-col-reverse lg:flex-row max-w-[1260px] m-auto">
          <Filter sideProducts={filterSideProducts} products={products} />
          <div className="grow">
            <ProductsContainer heading={"Shop"} products={products} />
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Everything;
