/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductSaga, getCatagoriesSaga } from "../redux/Product.slice";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { catagoires, allproduct } = useSelector((state) => {
    return state.products;
  });

  useEffect(() => {
    if (catagoires.length === 0) dispatch(getCatagoriesSaga());
    dispatch(getAllProductSaga());
    // console.log("component mounted");
    return () => {
      dispatch(getCatagoriesSaga([]));

      // console.log("componets unmounted");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
            {allproduct.map((p, id) => {
              return (
                <div
                  key={id}
                  onClick={() => navigate(`${p.id}`)}
                  className="item d-flex flex-column align-items-center text-center"
                >
                  <img src={p.image} width="200px" className="p-4" alt="img" />
                  <p className=" text-truncate col-6">
                    <span className="">{p.title}</span>
                  </p>
                </div>
              );
            })}
          </div>
          <button className="ctrl-btn d-none pro-prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>
          <button className="ctrl-btn  d-none pro-next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
