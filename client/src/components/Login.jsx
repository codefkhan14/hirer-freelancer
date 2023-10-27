import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="loginform">
        <form className="lform">
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
          style={{backgroundColor:" #6031a8"}}
            type="submit"
            name="button"
            className="formbtn"
            value="Login"
          />
          <span>
            Don't have an account?{" "}
            <Link to="/account/register" className="formspana">
              Create an account
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
