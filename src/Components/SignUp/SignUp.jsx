import React from "react";
import "../SignUp/SignUp.css";
import NavBar from "../NavBar/NavBar";

function SignUp() {
  return (
    <div className="signuppage">
      <img className="nav-logo mt-3 ms-3" src="/logo.png" alt="" />

      <div className="row d-flex justify-content-center align-items-center px-5">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5 px-5">
          <div
            className="card text-light cardDiv"
            style={{ borderRadius: "5px" }}
          >
            <div className="card-body px-5 py-2 text-start">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2">Sign In</h2>

                <div className="form-floating mb-3 mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email or mobile number</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <button className="btn btn-danger mt-3" type="submit">
                  Login
                </button>
                <h6 className="text-center my-3 opacity-75">OR</h6>
                <button className="btn btn-secondary">
                  Use a sign-in code
                </button>

                <p className="text-center small pb-lg-2 mt-3">
                  <a href="#!">Forgot password?</a>
                </p>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                  />
                  <label class="form-check-label" for="invalidCheck2">
                    Remember me
                  </label>
                </div>
                <p className="mb-0">
                  New to Netflix?{" "}
                  <a href="#!" className="text-white-50 fw-bold">
                    Sign up now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
