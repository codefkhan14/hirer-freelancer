import React from "react";
import "../styles/HireDetail.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

const HireDetail = () => {
  return (
    <>
      <div className="employee-full-detail">
        <div className="employee-full-detail-basic">
          <div>
            <img
              src="https://www.upwork.com/profile-portraits/c1mMhDJ1UQqaERSEJKitC2alYTPWAdbO_9XAA0aplj9OUzEOCJQYrgsG6zDbbkxh_0"
              alt="Loading..."
            />
          </div>

          <div>
            <h3>Manjeet Gurjar</h3>
            <p>
              <i>
                <MdOutlineLocationOn />
              </i>
              New Delhi, Delhi
            </p>

            <p>
              <i>
                <AiOutlineStar />
              </i>
              4.8/5
            </p>

            <p>₹135/hr</p>
          </div>
        </div>

        <div className="employee-full-detail-all">
          {/* about  */}
          <div>
            <h2>About Employee</h2>
            <div>
              <p>Who am i?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                provident quod ex iusto blanditiis recusandae dolorem impedit
                eligendi distinctio necessitatibus, libero tenetur nisi. Debitis
                ratione dolorem sed quis eaque eligendi.
              </p>
            </div>
            <div>
              <p>What I Offer?</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium totam sunt ullam voluptatum facere officiis ipsam
                consequatur enim dolores obcaecati.
              </p>
            </div>
            <div>
              <p>Why You hire me?</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                quibusdam omnis possimus nihil nisi voluptas soluta placeat odit
                pariatur nulla excepturi delectus asperiores, officiis maxime?
              </p>
            </div>
            <div>
              <p>Why You Choose Me?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate repellendus sapiente officiis, dignissimos quam
                dolorum laboriosam! Praesentium perspiciatis placeat totam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                porro?
              </p>
            </div>
          </div>

          {/* portfolio  */}
          <div className="employee-full-detail-all-portfolio">
            <h2>Portfolio</h2>
            <img
              src="https://www.upwork.com/profile-portraits/c1mMhDJ1UQqaERSEJKitC2alYTPWAdbO_9XAA0aplj9OUzEOCJQYrgsG6zDbbkxh_0"
              alt=""
            />
            <img
              src="https://www.upwork.com/profile-portraits/c1mMhDJ1UQqaERSEJKitC2alYTPWAdbO_9XAA0aplj9OUzEOCJQYrgsG6zDbbkxh_0"
              alt=""
            />
            <img
              src="https://www.upwork.com/profile-portraits/c1mMhDJ1UQqaERSEJKitC2alYTPWAdbO_9XAA0aplj9OUzEOCJQYrgsG6zDbbkxh_0"
              alt=""
            />
            <img
              src="https://www.upwork.com/profile-portraits/c1mMhDJ1UQqaERSEJKitC2alYTPWAdbO_9XAA0aplj9OUzEOCJQYrgsG6zDbbkxh_0"
              alt=""
            />
            <img
              src="https://www.upwork.com/profile-portraits/c1mMhDJ1UQqaERSEJKitC2alYTPWAdbO_9XAA0aplj9OUzEOCJQYrgsG6zDbbkxh_0"
              alt=""
            />
          </div>
          {/* skills  */}
          <div className="employee-full-detail-all-skills">
            <h2>Skills</h2>
            <div>

            <span>Photographer</span>
            <span>Video Editor</span>
            <span>Blogger</span>
            <span>Cameramen</span>
            </div>
          </div>
          {/* social media  */}
          <div className="employee-full-detail-all-social-media">
            <h2>Social Media</h2>
            <div>

            <span>instagramme</span>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Linkedin</span>
            </div>
          </div>
        </div>

        <button>Hire now</button>
      </div>
    </>
  );
};

export default HireDetail;
