import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
 const location = useLocation();
 const [pathname, setPathname] = useState('')
 useEffect(()=>{
 if(location.pathname === "/contact")
 setPathname("contact")
 if(location.pathname === "/account/login")
 setPathname("login")
 if(location.pathname === "/account/register")
 setPathname("register")
   
 }, [pathname])
 console.log(location);

  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 120
        ? setStickyClass("sticky-nav-come")
        : setStickyClass("");
    }
  };
  return (
    <>
      <div className={`main-navbar ${stickyClass}`}>
        <div className="main-navbaar-list1">
          <div className="main-navbar-list1-logo-icon">
            <div>
              <i>
                <HiMenuAlt1 />
              </i>
            </div>
            <div>
              {stickyClass ? (
                <Link to="/">
                  <img
                    src="https://hireyourlensman.com/wp-content/uploads/2021/09/logo.png"
                    alt=""
                  />
                </Link>
              ) : (
                <Link to="/">
                  <img
                    src="http://hireyourlensman.com/wp-content/uploads/2021/09/logo-alt.png"
                    alt=""
                  />
                </Link>
              )}
            </div>
          </div>
          <div className="main-navbar-list1-list">
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>

              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/contact" className={pathname === "contact" ? "active" : ""}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-navbaar-list2">
          <div className="main-navbar-list2-list">
            <ul>
              <li>
                <Link to="/account/login" className={pathname==="login" ? "hide-navbar-list2 active" : "hide-navbar-list2"}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/account/register" className={pathname ==="register" ? "hide-navbar-list2 active" : "hide-navbar-list2"}>
                  Register
                </Link>
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
