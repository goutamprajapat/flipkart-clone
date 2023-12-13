/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCatagories } from "../redux/Product.slice";
import ProductService from "../services/product.service";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { catagoires } = useSelector((state) => {
    return state.products;
  });
  const getdata = async () => {
    // ! call api
    let url = "https://fakestoreapi.com/products/categories";
    const result = await ProductService(url);
    if (result) {
      dispatch(saveCatagories(result));
    }
  };

  useEffect(() => {
    if (catagoires.length === 0) getdata();
    // console.log("component mounted");
    return () => {
      // console.log("componets unmounted");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catagoires.length, dispatch]);

  return (
    <>
      <div>
        <div className="container-fluid categories" style={{ marginTop: 60 }}>
          <div className="container">
            <div className="d-flex justify-content-between catemobile">
              {catagoires.map((catagories, index) => {
                return (
                  <div
                    className="items text-center"
                    key={index}
                    onClick={() =>
                      navigate(
                        `/products/?categoriesIndex=${
                          index + 1
                        }&categoriesName=${catagories}`
                      )
                    }
                  >
                    <div className="catimg">
                      <img
                        width="64px"
                        src="img/category/offers.webp"
                        alt="img"
                      />
                    </div>
                    <div className="catname">{catagories}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="slidercaro">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="img/sliders/b1.webp"
                  className="d-block w-100"
                  alt="img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="img/sliders/b2.webp"
                  className="d-block w-100"
                  alt="img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="img/sliders/b3.webp"
                  className="d-block w-100"
                  alt="img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="img/sliders/b4.webp"
                  className="d-block w-100"
                  alt="img"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row border-bottom mt-3">
            <div className="ps-4">
              <h6>Don't Miss These!</h6>
              <p className="text-secondary">Inspired by your order</p>
            </div>
          </div>
        </div>
        <div className="slider mb-5" id="slider">
          <div className="slide" id="slide">
            <div className="item text-center">
              <img
                src="img/productimg/product.webp"
                width="200px"
                className="p-4"
                alt="img"
              />
              <p>Mens Caps</p>
            </div>
            <div className="item text-center">
              <img
                src="img/productimg/p2.webp"
                width="200px"
                className="p-4"
                alt="img"
              />
              <p>Mens Caps</p>
            </div>
            <div className="item text-center">
              <img
                src="img/productimg/p3.webp"
                width="200px"
                className="p-4"
                alt="img"
              />
              <p>Mens Caps</p>
            </div>
            <div className="item text-center">
              <img
                src="img/productimg/p4.webp"
                width="200px"
                className="p-4"
                alt="img"
              />
              <p>Mens Caps</p>
            </div>
            <div className="item text-center">
              <img
                src="img/productimg/p5.webp"
                width="200px"
                className="p-4"
                alt="img"
              />
              <p>Mens Caps</p>
            </div>
            <div className="item text-center">
              <img
                src="img/productimg/p6.webp"
                width="200px"
                className="p-4"
                alt="img"
              />
              <p>Mens Caps</p>
            </div>
            <div className="item text-center">
              <img
                src="img/productimg/product.webp"
                width="200px"
                className="p-4"
                alt="img"
              />
              <p>Mens Caps</p>
            </div>
            <div className="item text-center">
              <img
                src="img/productimg/p2.webp"
                width="200px"
                className="p-4"
                alt="img"
              />
              <p>Mens Caps</p>
            </div>
            <div className="item text-center">
              <img
                src="img/productimg/p3.webp"
                width="200px"
                className="p-4"
                alt="img"
              />
              <p>Mens Caps</p>
            </div>{" "}
            alt="img"
            <div className="item text-center">
              <img
                src="img/productimg/p4.webp"
                width="200px"
                className="p-4"
                alt="img"
              />
              <p>Mens Caps</p>
            </div>
            <div className="item text-center">
              <img
                src="img/productimg/p5.webp"
                width="200px"
                className="p-4"
                alt="img"
              />
              <p>Mens Caps</p>
            </div>
            <div className="item text-center">
              <img
                src="img/productimg/p6.webp"
                width="200px"
                className="p-4"
                alt="img"
              />
              <p>Mens Caps</p>
            </div>
          </div>
          <button className="ctrl-btn pro-prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>
          <button className="ctrl-btn pro-next">
            {" "}
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
