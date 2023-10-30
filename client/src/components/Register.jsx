import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [userReg, setUserReg] = useState(true);
  const handleRegisterUser = () => {
    setUserReg(true);
  };
  const handleRegisterEmp = () => {
    setUserReg(false);
  };
  return (
    <>
      {userReg ? (
        <div>
          <div className="loginform-main-section">
            <form className="login-form">
              {/* option for employee or user  */}
              <div
                className={userReg ? "register-option mag" : "register-option"}
              >
                <span style={{ fontSize: "17px" }} onClick={handleRegisterUser}>
                  User
                </span>
                <span style={{ fontSize: "17px" }} onClick={handleRegisterEmp}>
                  Employer
                </span>
              </div>

              {/* name input  */}
              <div>
                <span>Full Name</span>
                <input type="text" placeholder="John Doe" name="name" />
              </div>
              {/* email input  */}
              <div>
                <span>Email</span>
                <input
                  type="email"
                  placeholder="john@example.com"
                  name="email"
                />
              </div>
              {/* phone input  */}
              <div>
                <span>Phone</span>
                <input type="email" placeholder="92xxxxxx78" name="text" />
              </div>
              {/* password input  */}
              <div>
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Must be atleast 6 characters"
                  name="password"
                />
              </div>

              {/* forgotte password  */}
              <div className="login-from-forgpass">
                <a href="">Forgot Password?</a>
              </div>

              {/* login button input  */}
              <div>
                <input
                  style={{ backgroundColor: " #6031a8" }}
                  type="submit"
                  name="button"
                  className="login-from-btn"
                  value="Register"
                />
              </div>

              {/* Option create new act  */}
              <div className="login-form-other-option">
                <span>
                  Already have an account?{" "}
                  <Link to="/account/login" className="login-form-create-act">
                    Login here
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="loginform-main-section">
              <form className="login-form">
                {/* option for employee or user  */}
                <div
                  className={
                    userReg ? "register-option" : "register-option tag"
                  }
                >
                  <span
                    style={{ fontSize: "17px" }}
                    onClick={handleRegisterUser}
                  >
                    User
                  </span>
                  <span
                    style={{ fontSize: "17px" }}
                    onClick={handleRegisterEmp}
                  >
                    Employer
                  </span>
                </div>

                {/* name input  */}
                <div>
                  <span>Full Name</span>
                  <input type="text" placeholder="John Doe" name="name" />
                </div>
                {/* email input  */}
                <div>
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    name="email"
                  />
                </div>
                {/* phone input  */}
                <div>
                  <span>Phone</span>
                  <input type="email" placeholder="92xxxxxx78" name="text" />
                </div>
                {/* password input  */}
                <div>
                  <span>Password</span>
                  <input
                    type="password"
                    placeholder="Must be atleast 6 characters"
                    name="password"
                  />
                </div>

                {/* forgotte password  */}
                <div className="login-from-forgpass">
                  <a href="">Forgot Password?</a>
                </div>

                {/* login button input  */}
                <div>
                  <input
                    style={{ backgroundColor: " #6031a8" }}
                    type="submit"
                    name="button"
                    className="login-from-btn"
                    value="Register"
                  />
                </div>

                {/* Option create new act  */}
                <div className="login-form-other-option">
                  <span>
                    Already have an account?{" "}
                    <Link to="/account/login" className="login-form-create-act">
                      Login here
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Register;
