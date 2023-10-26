import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
    <div className="main-navbar">
        <div className="main-navbaar-list1">

          <div className="main-navbar-list1-logo-icon">
            <div>

            <i>
              <HiMenuAlt1 />
            </i>
            </div>
            <div>

            <img
              src="http://hireyourlensman.com/wp-content/uploads/2021/09/logo-alt.png"
              alt=""
              />
              </div>
          </div>
          <div className="main-navbar-list1-list">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>

              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="main-navbaar-list2">
          <div className="main-navbar-list2-list">
            <ul>
              <li>
                <a href="/login" className="hide-navbar-list2">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className="hide-navbar-list2">
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div className="main-navbar-list2-button">
            <button>Hire Talent +</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
