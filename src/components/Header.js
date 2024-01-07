/* eslint-disable jsx-a11y/anchor-is-valid */
import Cookies from "js-cookie";
import { FiLogOut } from "react-icons/fi";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

const Header = () => {
  const nevigate = useNavigate();

  const { cart, isLogedIn } = useSelector((state) => state.products);

  const handleClickLogOut = () => {
    Cookies.remove("islogedIn");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="container-fluid bg_blue fixed-top">
        <div className="container ">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="px-4 bnavbar-brand" onClick={() => nevigate("/")}>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                width="70Wx"
                alt="img"
              />
              <div
                className=" text-warning m-0 p-0"
                style={{ fontSize: ".7rem" }}
              >
                <span className="m-0 p-0">Explor Plus</span>
              </div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon text-white"
                style={{ color: "#fff" }}
              />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex w-75 col-md-5">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for product brands and more"
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">
                  <i className="bi bi-search" />
                </button>
              </form>
              <ul className="navbar-nav  mb-2 mr-auto mb-lg-0 ms-3">
                <li className="nav-item">
                  <NavLink
                    className="nav-link position-relative"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link position-relative" to="/cart">
                    <i className="bi bi-cart-fill"></i>
                    Cart
                    <span
                      className={
                        cart.length !== 0
                          ? "position-absolute  start-100 translate-middle badge rounded-pill bg-danger"
                          : "d-none"
                      }
                    >
                      {cart.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  {!isLogedIn ? (
                    <button
                      className=" nav-link btn btn-sm  bg-white mt-1 text-dark p-0 p-1 px-2 rounded"
                      onClick={() => nevigate("/login")}
                    >
                      Login
                    </button>
                  ) : (
                    <FiLogOut
                      className=" nav-link btn fs-2  bg-danger mt-1 text-white p-0 p-1 px-2 rounded"
                      onClick={handleClickLogOut}
                    />
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
