import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ set }) => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <>
      <div>
        <main>
          <div
            className="container-fluid row g-0 d-flex bg-secondary align-items-center justify-content-center"
            style={{ width: "100%", height: "100vh" }}
          >
            <div className="row col-md-10 col-lg-10 col-xl-8 col-sm-10 rounded-3 shadow-lg overflow-hidden g-0 h-auto">
              <div className="bg-primary p-5 d-none d-md-flex col-sm-12 col-md-4 flex-column justify-content-between align-items-center">
                <div>
                  <span className="fs-1 fw-bold text-bg-primary">Sign-Up</span>
                  <p className="fs-6 mt-4 text-light">
                    Sign up with your mobile number to get started
                  </p>
                </div>
                <div className="clearfix">
                  <img
                    src="https://www.fabrikaa.com/pub/static/version1695371735/frontend/Fabrika/Base/en_US/Magento_Theme/images/login_img_c4a81e.png"
                    alt=".."
                  />
                </div>
              </div>
              <div className="bg-light d-flex align-content-center flex-column justify-content-evenly justify-content-md-between col-sm-12 col-md-8 p-md-1 p-sm-3 position-relative">
                <div
                  className="text-bg-danger position-absolute top-0 end-0  m-3 px-2 rounded-1"
                  onClick={() => navigate("/")}
                >
                  X
                </div>
                <div className="text-center d-md-none d-sm-block">
                  <div className="fs-1 text-dark">Sign-Up</div>
                </div>
                <form className="form-group px-5 p-3 m-2 mt-md-2">
                  <input
                    type="text"
                    name="username"
                    className="form-control border-0 mb-5 border-2 bg-light border-dark-subtle focus-ring-danger rounded-0 border-bottom"
                    placeholder="User Name"
                    value={user.username}
                    onChange={handleOnChange}
                  />

                  <input
                    type="text"
                    name="email"
                    className="form-control border-0 mb-5 border-2 bg-light border-dark-subtle focus-ring-danger rounded-0 border-bottom"
                    placeholder="Email Id"
                    value={user.email}
                    onChange={handleOnChange}
                  />
                  <input
                    type="password"
                    name="password"
                    className="form-control border-0 mb-5 bg-light border-2 border-dark-subtle focus-ring-danger rounded-0 border-bottom"
                    placeholder="password"
                    value={user.password}
                    autoComplete="false"
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
                      onClick={handleSubmit}
                      className="btn bg-warning btn-lg rounded-0"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>

                <div className="text-center">
                  <div className="text-primary">
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => set(true)}
                    >
                      Existing User? Log in
                    </span>
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

export default Signup;
