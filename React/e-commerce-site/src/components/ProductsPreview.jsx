
import React from "react";
import ProductCard from "./ProductCard";


const ProductsPreview = (props) => {
  const productCategory = props.products;
  return (
    <>
      <div className="m-auto max-w-[1200px] pb-12 px-4">
        <div className="pt-32">
          <h1 className="text-4xl text-center font-[Merriweather] font-semibold">{props.heading}</h1>
          <img
            src={require("../images/logo-leaf-new.png")}
            className="m-auto pb-10 pt-6"
            alt="leaf logo"
          />
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 justify-center">
          {productCategory.map((product) => {
            return (
              <React.Fragment key={product.key}>
                <div className="p-2.5">
                  <ProductCard title={product.title} name={product.name} price={product.price} smallimage={product.smallimage} key={product.key} />
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsPreview;