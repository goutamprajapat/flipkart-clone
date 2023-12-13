/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from "react-redux";
import { removeCart, manageQuantity } from "../redux/Product.slice";
import { useEffect, useState } from "react";

const Cart = () => {
  // ! set initial state of total count of products
  const [totalCounts, setTotalCount] = useState({
    totalCount: 0,
    totalPrice: 0,
  });
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // ! get total count and set totalPrice
    const prices = cart.reduce(
      (prevPrice, currntPrice) => {
        let pTotal = Math.round(currntPrice.Qty * currntPrice.price);

        return {
          totalCount: prevPrice.totalCount + currntPrice.Qty,
          totalPrice: prevPrice.totalPrice + pTotal,
        };
      },
      { totalCount: 0, totalPrice: 0 }
    );
    setTotalCount(prices);
  }, [cart]);
  console.log(totalCounts);
  return (
    <>
      <div>
        <div className="container" style={{ marginTop: 60 }}>
          <div className="py-3">
            <h5>Your Cart</h5>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="">
                <div className="card mb-3">
                  <div className="card-body">
                    {cart.length === 0 ? (
                      <div className="h4 text-secondary">
                        &#x261B; Empty Cart
                      </div>
                    ) : (
                      <>
                        {cart.map((_cart, index) => {
                          return (
                            <div key={index}>
                              <div className="d-flex">
                                <div className="px-4">
                                  <img
                                    src={_cart.image}
                                    className="cartpImg"
                                    alt=".."
                                  />
                                </div>
                                <div>
                                  <p className="card-title">{_cart.title}</p>
                                  <div className="text-secondary">
                                    <p className="mb-0">
                                      category : {_cart.category}
                                    </p>
                                    <p>Quantity : {_cart.Qty}</p>
                                  </div>
                                  <p className="card-text">
                                    ₹ {_cart.price} /-
                                  </p>
                                  <div className="">
                                    <button
                                      className="btn btn-success btn-sm me-2"
                                      onClick={() =>
                                        dispatch(
                                          manageQuantity({ index, sign: "+" })
                                        )
                                      }
                                    >
                                      +
                                    </button>

                                    <button
                                      className="btn btn-warning btn-sm mr-1"
                                      onClick={() =>
                                        dispatch(
                                          manageQuantity({ index, sign: "-" })
                                        )
                                      }
                                    >
                                      -
                                    </button>

                                    <button
                                      onClick={() => {
                                        dispatch(removeCart(index));
                                      }}
                                      className="btn mx-2 btn-danger btn-sm"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* check if cart lenth for add border property */}
                              {cart.length - 1 === index ? null : <hr />}
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              </div>
              {cart.length === 0 ? null : (
                <div className="card mb-3">
                  <div className="card-body d-flex  justify-content-end">
                    <a
                      href="#"
                      className="btn btn-danger btn btn-danger px-5 py-2 brnone"
                      style={{ backgroundColor: "#fb641b" }}
                    >
                      PLACE ORDER
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Add more product cards here */}
          </div>
          {cart.length === 0 ? null : (
            <div className="col-md-4 ">
              <div className="card position-sticky " style={{ top: "70px" }}>
                <div className="card-body">
                  <h6 className="card-title border-bottom pb-3">
                    PRICE DETAILS
                  </h6>
                  <table className="table">
                    <tbody>
                      <tr className="border-white">
                        <td>Price ({totalCounts.totalCount}) </td>
                        <td>₹ {totalCounts.totalPrice}</td>
                      </tr>
                      <tr className="border-white">
                        <td>Discount </td>
                        <td>
                          <span className="text-success">- ₹3000</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Delivery Charges </td>
                        <td>
                          <span className="text-success">FREE</span>
                        </td>
                      </tr>
                      <tr className="border-white ">
                        <td>
                          <span className="font-weight-bold">Total Amount</span>
                        </td>
                        <td>
                          <span className="font-weight-bold">
                            {totalCounts.totalPrice}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* login database  */}
        <div className="d-none">
          <div className="card mb-3">
            <div className="card-body">
              <div className="mb-2">
                <div>1. Login or SigUp</div>
                <div className="w-50">
                  <input
                    type="text"
                    className="form-control mt-3 mb-3"
                    placeholder="Enter Email/Mobile Number"
                  />
                  {/* <input type="text" class="form-control mt-3 mb-3" placeholder="Enter OTP"> */}
                  <a
                    href="#"
                    className="btn btn-danger btn btn-danger px-5 py-2 brnone"
                    style={{ backgroundColor: "#fb641b" }}
                  >
                    CONTINUE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <div className="mb-2">
                <div>2. DELIVERY ADDRESS</div>
                <div className="bg-light py-2 px-3 mt-3">Add new Address</div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <div className="mb-2">
                <div>3. ORDER SUMMARY</div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <div className="mb-2">
                <div>3. PAYMENT OPTION</div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body d-flex  justify-content-end">
              <a
                href="#"
                className="btn btn-danger btn btn-danger px-5 py-2 brnone"
                style={{ backgroundColor: "#fb641b" }}
              >
                PLACE ORDER
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
