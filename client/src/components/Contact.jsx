import React from "react";
import "../styles/Contact.css";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="form-top-section">
      <h1>Contact Us!</h1>
      <div className="contact-section">

     

        <div className="contact-section-detail">
          <div>
            <p>
              <i>
                <MdLocationOn />
              </i>
              R.K. Puram , New Delhi India - 332001
            </p>
          </div>

          <div>
            <p>
              <i>
                <MdEmail />
              </i>
              furkanrangrej200@gmail.com
            </p>
          </div>
          <div>
            <p>
              <i>
                <MdPhone />
              </i>
              +91-9571605672
            </p>
          </div>
        </div>

        <div className="contact-section-form">
          <div>
            <input type="text" placeholder="Name" required />
          </div>
          <div>
            <input type="email" placeholder="Email" required />
          </div>
          <div>
       <textarea rows="8" placeholder="Message" required></textarea>
     </div>
          <div>
            <input type="submit" value="Submit" required />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
