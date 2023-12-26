import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [userReg, setUserReg] = useState(true);
  const [formUserReg, setFormUserReg] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const toastOption = {
    position: "bottom-right", // Set the position to "bottom-center"
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleRegisterUser = () => {
    setUserReg(true);
  };
  const handleRegisterEmp = () => {
    setUserReg(false);
  };

  const handleInput = (e) => {
    setFormUserReg({
      ...formUserReg,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitRegUser = async (e) => {
    e.preventDefault();
    try {
      const userRegisterUrl = "http://localhost:5000/user/register";

      const response = await axios.post(userRegisterUrl, formUserReg);
      console.log(response.data);
      window.alert("User Reigster Successfull");
      toast.success("Register Successfully", toastOption);
      localStorage.setItem("userDetails", JSON.stringify(response.data));
      navigate("/");
    } catch (err) {
      console.log("user reg error", err.response.data);
      toast.error(err.response.data.error, toastOption);
    }
    return true;
  };

  return (
    <>
      <div>
        {userReg ? (
          <div>
            {/* user register  */}
            <div className="loginform-main-section">
              <form
                className="login-form"
                method="POST"
                onSubmit={handleSubmitRegUser}
              >
                {/* option for employee or user  */}
                <div
                  className={
                    userReg ? "register-option mag" : "register-option"
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
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="name"
                    required
                    value={formUserReg.name}
                    onChange={handleInput}
                  />
                </div>
                {/* email input  */}
                <div>
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    name="email"
                    required
                    value={formUserReg.email}
                    onChange={handleInput}
                  />
                </div>
                {/* phone input  */}
                <div>
                  <span>Phone</span>
                  <input
                    type="number"
                    placeholder="92xxxxxx78"
                    required
                    name="phone"
                    value={formUserReg.phone}
                    onChange={handleInput}
                  />
                </div>
                {/* password input  */}
                <div>
                  <span>Password</span>
                  <input
                    type="password"
                    placeholder="Must be atleast 6 characters"
                    name="password"
                    required
                    value={formUserReg.password}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <span>Confirm Password</span>
                  <input
                    type="password"
                    placeholder="Re-enter your password"
                    required
                    name="cpassword"
                    value={formUserReg.cpassword}
                    onChange={handleInput}
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
            <ToastContainer />
          </div>
        ) : (
          <>
            <div>
              {/* employee register  */}
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
                    <span>Official Email</span>
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
                      value="Send OTP"
                    />
                  </div>

                  {/* Option create new act  */}
                  <div className="login-form-other-option">
                    <span>
                      Already have an account?{" "}
                      <Link
                        to="/account/login"
                        className="login-form-create-act"
                      >
                        Login here
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
