import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Juice from "./pages/product category/Juice";
import Grocery from "./pages/product category/Grocery";
import Everything from "./pages/product category/Everything"
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import MobNav from "./components/MobNav";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <div>
      <Cart />
      <MobNav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-category/juice" element={<Juice />} />
        <Route path="/product-category/grocery" element={<Grocery />} />
        <Route path="/product-category/shop" element={<Everything />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
