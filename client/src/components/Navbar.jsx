import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineUserCircle, HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();

  const userDetails = localStorage.getItem("userDetails");
  const parsedObject = JSON.parse(userDetails);

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to Logout?");

    if (!isConfirmed) {
      return;
    }

    navigate("/");
    // navigate("/account/login");
    localStorage.removeItem("userDetails");
  };

  const location = useLocation();
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    if (location.pathname === "/contact") setPathname("contact");
    if (location.pathname === "/account/login") setPathname("login");
    if (location.pathname === "/account/register") setPathname("register");
  }, [pathname]);

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

  const [isDropdownUser, setDropdownUser] = useState(false);

  const toggleDropdown = () => {
    setDropdownUser(!isDropdownUser);
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
                <Link
                  to="/contact"
                  className={pathname === "contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-navbaar-list2">
          <div className="main-navbar-list2-list">
            <ul>
              <li className="dropdown-list" style={{ marginTop: "5px" }}>
                <div
                  className={`navbar-link ${
                    location.pathname === "/Contest/Quize-contest" ||
                    location.pathname === "/Contest/Coding-contest"
                      ? "active"
                      : ""
                  }`}
                  onClick={toggleDropdown}
                >
                  <i>
                    <HiOutlineUserCircle />
                  </i>
                  <i
                    className={`drop-down-list-arrow ${
                      isDropdownUser ? "up" : "down"
                    }`}
                  >
                    {isDropdownUser ? (
                      <MdOutlineArrowDropUp />
                    ) : (
                      <MdOutlineArrowDropDown />
                    )}{" "}
                  </i>
                </div>
                {isDropdownUser && (
                  <ul className="navbar-dropdown-menu">
                    {parsedObject?.token ? (
                      <>
                        <li>
                          <Link>
                            <span>{parsedObject?.user.name}</span>

                            <span>{parsedObject?.user.email}</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/"> Home</Link>
                        </li>
                        <li>
                          <Link>My Application</Link>
                        </li>
                        <li>
                          <Link>Help & Suppport</Link>
                        </li>
                        <li>
                          <Link>Manage Account</Link>
                        </li>
                        <li>
                          <Link onClick={handleLogout}>Logout</Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to="/account/register">Register</Link>
                        </li>
                        <li>
                          <Link to="/account/login">Login</Link>
                        </li>
                      </>
                    )}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="main-navbar-list2-button">
            <Link to="/clients/maching-prefrence">
              <button>Hire Talent +</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
