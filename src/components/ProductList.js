import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtoCart } from "../redux/Product.slice";

const ProductList = ({ data }) => {
  const dispatch = useDispatch();
  const naviage = useNavigate();

  return (
    <>
      {data.map((product) => {
        return (
          <div
            className=" text-dark border-bottom border-2  p-4 "
            key={product.id}
            style={{ aspectRatio: "4/1", textDecoration: "none" }}
          >
            <div className=" row size">
              <div className=" col-4 d-flex align-items-center justify-content-center">
                <img
                  src={product.image}
                  className="card-img-top-img  w-75"
                  alt="..."
                  style={{ aspectRatio: "4/4", objectFit: "contain" }}
                />
              </div>
              <div className="col-4 card-body ">
                {/* navigate to single product */}
                <div onClick={() => naviage(`/products/${product.id}`)}>
                  <h4 className="product-style">{product.title}</h4>
                  <div className=" d-flex ">
                    <span>
                      <button className="badge btn text-bg-success ">
                        {product.rating.rate}
                        <i className="bi bi-star-fill"></i>
                      </button>
                    </span>
                  </div>
                  <div className="overflow">
                    <p className="product-name ">{product.description}</p>
                  </div>
                  <div>
                    <span className="pe-2 h2">₹ {product.price} /-</span>
                    <span className="text-secondary pe-2">
                      <del>{product.rating.count}</del>
                    </span>
                    <span className="text-success">80% off</span>
                  </div>
                </div>
                {/* navigate to cart and to data in carts */}
                <button
                  className="btn btn-danger btn-sm m-2"
                  onClick={() => dispatch(addtoCart({ ...product, Qty: 1 }))}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default memo(ProductList);
