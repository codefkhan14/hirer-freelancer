import React from 'react'
import { FiSearch } from "react-icons/fi";
import { BiFilterAlt } from "react-icons/bi";
const HireFilters = () => {
  return (
    <div className="employee-list-filter-section">
          <div className="employee-list-search">
            <div>
              <p>Keyword Search</p>
            </div>
            <div>
              <input type="text" placeholder="eg. Photgraphy,Delhi,JohnDoe" />
              <i>
                {" "}
                <FiSearch />
              </i>
            </div>
          </div>

          <div className="employee-list-filter">
            <div style={{ textAlign: "center" }}>
              <p>
                <i>
                  <BiFilterAlt />
                </i>
                Filters
              </p>
            </div>

            <div style={{marginTop:"30px"}}>
              <span>Category</span>
              <input type="text" placeholder="eg. Photgraphy" />
            </div>
            <div style={{marginTop:"30px"}}>
              <span>Category</span>
              <input type="text" placeholder="eg. Photgraphy" />
            </div>
            <div style={{marginTop:"30px"}}>
              <span>Category</span>
              <input type="text" placeholder="eg. Photgraphy" />
            </div>

            <div style={{margin:"10px"}}>
              <span>Location</span>
              <input type="text" placeholder="eg. Delhi" />
            </div>
          </div>
        </div>
  )
}

export default HireFilters
