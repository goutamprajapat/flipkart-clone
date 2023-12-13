import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <main>
          <div
            className="container-fluid row g-0 d-flex bg bg-secondary align-items-center justify-content-center"
            style={{ width: "100%", height: "100vh" }}
          >
            <div className="row col-md-10 col-lg-10 col-xl-8 col-sm-10 rounded-3 shadow overflow-hidden g-0 h-75 position-relative">
              <div className="bg-primary p-5 d-none d-md-flex col-sm-12 col-md-4 flex-column justify-content-between align-items-center">
                <div>
                  <span className="fs-1 fw-bold text-bg-primary">Login</span>
                  <p className="fs-5 mt-4 text-light">
                    Get aceess to your Orders,White list and Recommendations
                  </p>
                </div>
                <div className="clearfix">
                  <img
                    src="https://www.fabrikaa.com/pub/static/version1695371735/frontend/Fabrika/Base/en_US/Magento_Theme/images/login_img_c4a81e.png"
                    alt=""
                    className
                  />
                </div>
              </div>

              <div className="bg-light d-flex align-content-center flex-column justify-content-evenly justify-content-md-between col-sm-12 col-md-8 p-md-5 p-sm-3 position-relative">
                <div
                  className="text-bg-danger position-absolute top-0 end-0  m-3 px-2 rounded-1"
                  onClick={() => navigate("/")}
                >
                  X
                </div>
                <div className="text-center d-md-none d-sm-block">
                  <div className="fs-1 text-dark">Login</div>
                </div>
                <form action className="form-group p-4 m-0 mt-md-5">
                  <input
                    type="text"
                    name
                    className="form-control border-0 mb-5 border-2 bg-light border-dark-subtle focus-ring-danger rounded-0 border-bottom"
                    placeholder="User Name"
                    id
                  />
                  <input
                    type="text"
                    name
                    className="form-control border-0 mb-5 bg-light border-2 border-dark-subtle focus-ring-danger rounded-0 border-bottom"
                    placeholder="Password"
                    id
                  />
                  <div>
                    <p className="text-secondary">
                      by continuing you agreeto Flipkart
                      <span className="text-primary">Terms of Use</span> and
                      <span className="text-primary">
                        Terms of Privacy Policy.
                      </span>
                    </p>
                  </div>
                  <div className="d-grid">
                    <button className="btn bg-warning btn-lg rounded-0">
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  <NavLink to="/signup" className="text-decoration-none">
                    New To Filpkart ? Create an Account
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
