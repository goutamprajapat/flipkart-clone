import React, { useEffect } from "react";
import Home from "./components/Home";
import AllProduct from "./components/AllProduct";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footers from "./components/Footers";
import Cart from "./components/Cart";
import Login from "./components/Login";

import SingleProduct from "./components/SingleProduct";
import { useSelector } from "react-redux";

const App = () => {
  const navigate = useNavigate();
  const { isLogedIn } = useSelector((state) => state.products);
  useEffect(() => {
    if (isLogedIn === null) {
      navigate("/login");
    }
  }, [isLogedIn, navigate]);

  return (
    <div>
      <Header />
      <Routes>
        {isLogedIn === false ? (
          <>
            <Route path="/login" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProduct />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="*"
              element={<h1 className="mt-5">404 Page Not Found</h1>}
            />
          </>
        )}
      </Routes>
      <Footers />
    </div>
  );
};

export default App;
