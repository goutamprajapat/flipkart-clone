import React from "react";
import Home from "./components/Home";
import AllProduct from "./components/AllProduct";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footers from "./components/Footers";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SingleProduct from "./components/SingleProduct";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/products/:id" element={<SingleProduct />} />

        <Route path="cart" element={<Cart />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>

      <Footers />
    </div>
  );
};

export default App;
