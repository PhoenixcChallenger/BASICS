import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter";
import filterSideProducts from "../../store-data/FilterSideProducts";
import ProductsContainer from "../../components/ProductsContainer";
import { products } from "../../store-data/Allproduct";

const Everything = () => {
  return (
    <>
      <Header background={"#FFFFFF"} everythingColor={"#8BC34A"} />
      <div className="bg-content-background">
        <div className="flex max-w-[1260px] m-auto">
          <Filter products={filterSideProducts} />
          <div className="grow">
            <ProductsContainer heading={"Shop"} products={products}/>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Everything;
