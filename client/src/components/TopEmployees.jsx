import React, { useEffect, useRef, useState } from "react";
import "../styles/TopEmployees.css";
import { TfiAngleLeft } from "react-icons/tfi";
import { SlArrowRight } from "react-icons/sl";
const TopEmployees = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 318; // The amount to scroll when clicking the navigation buttons

  const userDetails = [
    {
      id: "1",
      name: "MD Furkan",
      location: "New Delhi",
      Price: "12000/month",
      images:
        "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    },
    {
      _id: "2",
      name: "Manjeet",
      location: "Mumbai",
      Price: "1000/month",
      images:
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    },
    {
      _id: "3",
      name: "Rishav Raj",
      location: "Bihar",
      Price: "13000/month",
      images:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
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
  const [scrollable, setScrollable] = useState({ left: true, right: true });

  useEffect(() => {
    const container = sliderRef.current;

    const handleScroll = () => {
      setScrollable((prevScrollable) => ({
        ...prevScrollable,
        left: container.scrollLeft > 0,
      }));

      setScrollable((prevScrollable) => ({
        ...prevScrollable,
        right:
          container.scrollLeft < container.scrollWidth - container.clientWidth,
      }));
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (scrollDirection) => {
    const container = sliderRef.current;
    if (scrollDirection === "left" && scrollable.left) {
      container.scrollLeft -= scrollAmount;
    } else if (scrollDirection === "right" && scrollable.right) {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="top-main-employees">
   <h2>Latest Employees on Hirer</h2>
   <div className="top-category-employee">
    <div className="top-category-employee-heading">
      Popular categories:
    </div>
    <div className="top-category-employee-list">
      Photograpgy
    </div >
    <div className="top-category-employee-list">
      Videography
    </div>
    <div className="top-category-employee-list">
      Modeling
    </div>
    <div className="top-category-employee-list">
      Videography
    </div>
    <div className="top-category-employee-list">
     Shooter
    </div>
    <div className="top-category-employee-list">
      Videography
    </div>
    <div className="top-category-employee-list">
      Modeling
    </div>
    <div className="top-category-employee-list">
     Shooter
    </div>
   </div>
    <div className="top-employees">


      <div className="top-employee-section" ref={sliderRef}>
        {userDetails.map((item) => {
          return (
            <div className="top-employee-details" key={item.id}>
              <div className="top-employee-user-detail">
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.location}</p>
                  <p>{item.Price}</p>
                </div>
                <div>
                  <a href="">
                    View Details <SlArrowRight />
                  </a>
                </div>
              </div>
              <div className="top-employee-img">
                <img alt="Loading..." src={item?.images} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="top-employee-detail-btn">
        <button
          onClick={() => {
            handleScroll("left");
          }}
          disabled={!scrollable.left}
        >
          <TfiAngleLeft />
        </button>
        <button
          onClick={() => {
            handleScroll("right");
          }}
          disabled={!scrollable.right}
        >
          <SlArrowRight />
        </button>
      </div>
    </div>

    </div>
  );
};

export default TopEmployees;
