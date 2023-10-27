import React from "react";
import "../styles/Footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";
import { RiFacebookFill } from "react-icons/ri";
import { FaWhatsapp, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="footer">
          <div className="footer-section1">
            <div className="footer-section1-logo">
              <img
                src="https://hireyourlensman.com/wp-content/uploads/2021/09/logo.png"
                alt=""
              />
            </div>
            <div className="footer-section1-para">
              328 Queensberry Street, North Melbourne VIC 3051, Australia.
              <br />
              support@prolancer.com
            </div>
            <div className="footer-section1-media-icons">
              <div>
                <a href="https://www.instagram.com/bandhej_hub/">
                  <i>
                    <PiInstagramLogo />
                  </i>
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/bandhejhub14/">
                  <i>
                    <RiFacebookFill />
                  </i>
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/channel/UCXArGaNnUU_bJGYZJb-WlAA">
                  <i>
                    <FaYoutube />
                  </i>
                </a>
              </div>
              <div>
                <a href="https://wa.me/7740930250">
                  <i>
                    <FaWhatsapp />
                  </i>
                </a>
              </div>
              <div>
                <a href="">
                  <i>
                    <FaTwitter />
                  </i>
                </a>
              </div>
            </div>
            <div className="footer-section1-search">
              <input type="text" placeholder="Your Email Address" />
              <button>Sign Up</button>
            </div>
          </div>
          <div className="footer-section2">
            <h2>Categories</h2>
            <div className="footer-section1-cat-list">
              <p>Video & Animation</p>
              <p>Digital Marketing</p>
              <p>Graphics & Design</p>
              <p>Programming & Tech</p>
              <p>Business</p>
            </div>
          </div>
          <div className="footer-section2">
            <h2>Community</h2>
            <div className="footer-section1-cat-list">
              <p>Video & Animation</p>
              <p>Graphic & Design</p>
              <p>Graphic & Design</p>
              <p>Business</p>
              <p>Programming & Tech</p>
            </div>
          </div>
          <div className="footer-section2">
            <h2>Support</h2>
            <div className="footer-section1-cat-list">
              <p>Business</p>
              <p>Graphic & Design</p>
              <p>Programming & Tech</p>
              <p>Digital Marketing</p>
              <p>Video & Animation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-bar">
        <div className="copyright-bar-para">
          <p>Copyright © 2022 ProLancer All Rights Reserved.</p>
        </div>

        <div className="copyright-bar-imgs">
          <img
            src="http://hireyourlensman.com/wp-content/uploads/2021/04/visa.png"
            alt=""
          />
          <img
            src="http://hireyourlensman.com/wp-content/uploads/2021/04/mastercard.png"
            alt=""
          />
          <img
            src="http://hireyourlensman.com/wp-content/uploads/2021/04/paypal.png"
            alt=""
          />
          <img
            src="http://hireyourlensman.com/wp-content/uploads/2021/04/jcb.png"
            alt=""
          />
          <img
            src="http://hireyourlensman.com/wp-content/uploads/2021/04/discover.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
