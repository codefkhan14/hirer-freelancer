import React from "react";

const HireEmpList = () => {
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
  return (
    <div className="top-employee-sectionn">
      {userDetails.map((item) => {
        return (
          <div className="top-employee-detailss" key={item.id}>
            <div className="top-employee-user-detaill">
              <div>
                <h4>{item.name}</h4>
                <p>{item.location}</p>
                <p>{item.Price}</p>
              </div>
              <div>
                <a href="">View Details</a>
              </div>
            </div>
            <div className="top-employee-imgg">
              <img alt="Loading..." src={item?.images} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HireEmpList;
