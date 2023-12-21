
import ProductCard from "./ProductCard";


const ProductsPreview = (props) => {
  const productCategory = props.products;
  return (
    <>
      <div className="m-auto max-w-[1200px] pb-12">
        <div className="pt-32">
          <h1 className="text-4xl text-center font-[Merriweather] font-semibold">{props.heading}</h1>
          <img
            src={require("../images/logo-leaf-new.png")}
            className="m-auto pb-10 pt-6"
            alt="leaf logo"
          />
        </div>
        <div className="flex justify-center">
          {productCategory.map((product) => {
            return (
              <div className="p-2.5">
                <ProductCard title={product.title} name={product.name} price={product.price} image={product.image} key={product.key} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsPreview;