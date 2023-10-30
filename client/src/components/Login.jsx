import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="loginform-main-section">
        <form className="login-form">
          {/* email input  */}
          <div>
            <span>Email</span>
            <input type="email" placeholder="john@example.com" name="email" />
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
    </div>
  );
};

export default Login;
