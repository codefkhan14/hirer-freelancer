import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Categories />
      <Rating/>
      <Footer />
    </div>
  );
};

export default Home;
