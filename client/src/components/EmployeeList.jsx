import React from "react";
import "../styles/EmployeeList.css";
import { FiSearch } from "react-icons/fi";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const userDetails = [
    {
      id: "1",
      name: "Md Furkan",
      location: "New Delhi",
      Price: "₹135/hr",
      images:        "https://www.upwork.com/profile-portraits/c1mMhDJ1UQqaERSEJKitC2alYTPWAdbO_9XAA0aplj9OUzEOCJQYrgsG6zDbbkxh_0",

    },
    {
      _id: "2",
      name: "Manjeet",
      location: "Mumbai",
      Price: "1000/month",
      images:
      "https://www.upwork.com/profile-portraits/c1mkLMP2m92nPYcxC-z87bUYVdbxWvQppqkMtpT7XQWRmLgXMkmHXO4tLJpREUZ9nT",

    },
    {
      _id: "3",
      name: "Rishav Raj",
      location: "Bihar",
      Price: "13000/month",
      images:
        "https://www.upwork.com/profile-portraits/c1YX81S8-8PQVJzrBUrom4dUlhyFo2MYmcGvw2b9STHKm1DMDyXecUnGfyjE1uzAjj",
    },
    {
      _id: "4",
      name: "Rohan Pundir",
      location: "Kolkata",
      Price: "12,000/month",
      images:
        "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg",
    },
    {
      id: "5",
      name: "Sarthak Agrawal",
      location: "New Delhi",
      Price: "12000/month",
      images:
        "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    },
    {
      _id: "6",
      name: "Dhruv Tiwari",
      location: "New Delhi",
      Price: "12000/month",
      images:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      _id: "6",
      name: "Dhruv Tiwari",
      location: "New Delhi",
      Price: "12000/month",
      images:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      _id: "6",
      name: "Dhruv Tiwari",
      location: "New Delhi",
      Price: "12000/month",
      images:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      _id: "6",
      name: "Dhruv Tiwari",
      location: "New Delhi",
      Price: "12000/month",
      images:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      _id: "6",
      name: "Dhruv Tiwari",
      location: "New Delhi",
      Price: "12000/month",
      images:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      _id: "6",
      name: "Dhruv Tiwari",
      location: "New Delhi",
      Price: "12000/month",
      images:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      _id: "6",
      name: "Dhruv Tiwari",
      location: "New Delhi",
      Price: "12000/month",
      images:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
  ];

  return (
    <div className="employee-list">
      <div className="employee-list-filter-section">
        <div className="employee-list-search">
          <div>
            <p>Keyword Search</p>
          </div>
          <div>
            <input type="text" placeholder="eg. Photgraphy,Delhi,JohnDoe" />
            <i>
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

          <div style={{ marginTop: "30px" }}>
            <span>Profile</span>
            <input type="text" placeholder="eg. John Doe" />
          </div>
          <div style={{ marginTop: "30px" }}>
            <span>Category</span>
            <input type="text" placeholder="eg. Photgraphy" />
          </div>

          <div style={{ margin: "10px" }}>
            <span>Location</span>
            <input type="text" placeholder="eg. Delhi" />
          </div>
          <div style={{ margin: "10px" }}>
            <input type="submit" value="Search" />
          </div>
        </div>
      </div>

      <div className="top-employee-sectionn">
        {userDetails.map((item) => {
          return (
            <div className="top-employee-detailss" key={item.id}>
              <div className="top-employee-imgg">
                <img alt="Loading..." src={item?.images} />
              </div>
              <div className="top-employee-user-detaill">
                <h3>{item.name}</h3>
                <p
                  style={{
                    marginTop: "2px",
                    color: " rgb(218, 218, 218);",
                    fontSize: "17px",
                  }}
                >
                  Photographer
                </p>
                <p>{item.Price}</p>
                <p>
                  <i>
                    <AiOutlineStar />
                  </i>
                  4.8/5
                </p>
                <p>
                  <i>
                    <MdOutlineLocationOn />
                  </i>
                  {item.location}
                </p>

                <Link to="/employee/detail">
                  <button>View Profile</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeList;
