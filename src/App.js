import React, { useEffect } from "react";
import Home from "./components/Home";
import AllProduct from "./components/AllProduct";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footers from "./components/Footers";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SingleProduct from "./components/SingleProduct";
import { useSelector } from "react-redux";

const App = () => {
  const navigate = useNavigate();
  const { isLogedIn } = useSelector((state) => state.products);
  useEffect(() => {
    if (isLogedIn === false) {
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
            <Route path="/signup" element={<Signup />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<AllProduct />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
          </>
        )}
      </Routes>
      <Footers />
    </div>
  );
};

export default App;
