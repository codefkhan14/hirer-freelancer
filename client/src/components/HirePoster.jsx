import React from "react";
import "../styles/HirePoster.css";
const HirePoster = () => {
  return (
    <div className="hire-poster-main">
      <div className="hire-poster">
        <div className="hire-poster-detail">
          <h2>Find the talent needed to get your business growing.</h2>
          <p>
            Advertise your jobs to millions of monthly users and search 15.8
            million CVs
          </p>
          <div>
            <button>Hire Talent</button>
          </div>
        </div>
        <div className="hire-poster-img">
          <img
            src="https://terotam.com/wp-content/uploads/2022/11/Efficient-Asset-and-Inventory-Management.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HirePoster;
