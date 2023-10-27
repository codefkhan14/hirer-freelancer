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
          <div className="loginform">
            <form className="lform">
              <div className={userReg ? "register-option mag" : "register-option"}>
                <span style={{ fontSize: "17px" }} onClick={handleRegisterUser}>
                  User
                </span>
                <span style={{ fontSize: "17px" }} onClick={handleRegisterEmp}>
                  Employer
                </span>
              </div>
              <div>
                <span>Full Name</span>
                <input
                  type="email"
                  placeholder="John Doe"
                  className="loginforminput"
                  name="email"
                />
              </div>
              <div>
                <span>Email</span>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="loginforminput"
                  name="email"
                />
              </div>
              <div>
                <span>Phone</span>
                <input
                  type="email"
                  placeholder="92xxxxxx78"
                  className="loginforminput"
                  name="email"
                />
              </div>
              <div>
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Must be atleast 6 characters"
                  className="loginforminput"
                  name="password"
                />
              </div>

              <a href="" className="fogpass">
                Forgot Password?
              </a>

              <input
                style={{ backgroundColor: " #6031a8" }}
                type="submit"
                name="button"
                className="formbtn"
                value="Register"
              />
              <span>
                Already have an account?{" "}
                <Link to="/account/Login" className="formspana">
                  Login here
                </Link>
              </span>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="loginform">
              <form className="lform">
                <div className={userReg ? "register-option" : "register-option tag"}>
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
                <div>
                  <span>Full Name</span>
                  <input
                    type="email"
                    placeholder="John Doe"
                    className="loginforminput"
                    name="email"
                  />
                </div>
                <div>
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="loginforminput"
                    name="email"
                  />
                </div>

                <div>
                  <span>Password</span>
                  <input
                    type="password"
                    placeholder="Must be atleast 6 characters"
                    className="loginforminput"
                    name="password"
                  />
                </div>

                <a href="" className="fogpass">
                  Forgot Password?
                </a>

                <input
                  style={{ backgroundColor: " #6031a8" }}
                  type="submit"
                  name="button"
                  className="formbtn"
                  value="Register"
                />
                <span>
                  Already have an account?{" "}
                  <a href="/account/register" className="formspana">
                    Sign in
                  </a>
                </span>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Register;
