import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/Product.slice";

const Login = () => {
  const dispatch = useDispatch();
  const [logUser, setLogUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLogUser({ ...logUser, [name]: value });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    let user = JSON.parse(window.localStorage.getItem("user"));

    console.log("object " + user.email + user.password);
    if (user.email === logUser.email) {
      if (user.password === logUser.password) {
        dispatch(loginUser(true));
        window.location.href = "/";
      } else {
        alert("enter valid password");
      }
    } else {
      alert("invalid username or password");
    }
  };

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
                    alt="..."
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
                <form className="form-group p-4 m-0 mt-md-5">
                  <input
                    type="email"
                    name="email"
                    className="form-control border-0 mb-5 border-2 bg-light border-dark-subtle focus-ring-danger rounded-0 border-bottom"
                    placeholder="User Name"
                    value={logUser.email}
                    onChange={handleOnChange}
                  />
                  <input
                    type="password"
                    name="password"
                    className="form-control border-0 mb-5 bg-light border-2 border-dark-subtle focus-ring-danger rounded-0 border-bottom"
                    placeholder="Password"
                    autoComplete="false"
                    value={logUser.password}
                    onChange={handleOnChange}
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
                    <button
                      onClick={handleLogIn}
                      className="btn bg-warning btn-lg rounded-0"
                    >
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
