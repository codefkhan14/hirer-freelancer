import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formUserLogin, setFormUserLogin] = useState({
    email: "",
    password: "",
  });
  const toastOption = {
    position: "bottom-right", // Set the position to "bottom-center"
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleInput = (e) => {
    setFormUserLogin({
      ...formUserLogin,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const userLoginUrl = "http://localhost:5000/user/login";

      const response = await axios.post(userLoginUrl, formUserLogin);
      console.log(response.data);
      window.alert("User Login Successfull");
      toast.success("Login Successfully", toastOption);
      localStorage.setItem("userDetails", JSON.stringify(response.data));
      navigate("/");
    } catch (err) {
      toast.error(err.response.data.error, toastOption);
      console.log("user reg error", err.response.data);
    }
    return true;
  };
  return (
    <div>
      <div className="loginform-main-section">
        <form className="login-form" method="POST" onSubmit={handleSubmitLogin}>
          {/* email input  */}
          <div>
            <span>Email</span>
            <input
              type="email"
              placeholder="john@example.com"
              name="email"
              required
              value={formUserLogin.email}
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
              value={formUserLogin.password}
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
              value="Login"
            />
          </div>

          {/* Option create new act  */}
          <div className="login-form-other-option">
            <span>
              Don't have an account?{" "}
              <Link to="/account/register" className="login-form-create-act">
                Create an account
              </Link>
            </span>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
