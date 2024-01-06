import { useNavigate, useParams } from "react-router-dom";
import { getSingleProductWithIDSaga } from "../redux/Product.slice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import ProductService from "../services/product.service";
const SingleProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //! get id form url parameter
  const { id } = useParams();

  const { singleProduct } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getSingleProductWithIDSaga(id));
  }, [dispatch, id]);

  return (
    <>
      <div style={{ marginTop: 50 }} className="bg-secondary p-4">
        <main className="container-fluid">
          <h5
            className="text-light mb-3 "
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            &#x2190; {singleProduct.category}
          </h5>
          <div className="container-fluid container-md bg-white rounded-3 ">
            <div className="row mb-3">
              <div className=" text-dark  p-4 ">
                <div className=" row size">
                  <div className=" col-md-4 col-12 d-flex  flex-column align-items-center justify-content-cente">
                    <img
                      src={singleProduct.image}
                      className="card-img-top-img   w-75"
                      alt="..."
                      style={{ aspectRatio: "4/4", objectFit: "contain" }}
                    />
                  </div>
                  <div className="col-4 card-body px-3 ">
                    <h4 className="product-style">{singleProduct.title}</h4>
                    <div className=" d-flex ">
                      <span>
                        <button className="badge btn text-bg-success ">
                          4.4
                          <i className="bi bi-star-fill mx-1"></i>
                        </button>
                        <span style={{ fontSize: ".9rem" }}>ratings</span>
                      </span>
                    </div>
                    <div className="overflow">
                      <p className="product-name ">
                        {singleProduct.description}
                      </p>
                    </div>
                    <div>
                      <span className="pe-2 h2">
                        <span>
                          <i className="bi bi-currency-dollar"></i>
                        </span>
                        {singleProduct.price}
                      </span>

                      <span className="text-secondary pe-2">
                        <del>{singleProduct.price}</del>
                      </span>
                      <span className="text-success">80% off</span>
                      <div className="mt-2">
                        <div className="btn btn-danger">Add To Cart</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SingleProduct;
