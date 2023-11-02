import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import EmployeeList from "./pages/EmployeeList";
import HireDetailPage from "./pages/HireDetailPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/register" element={<Register />} />
          <Route path="/clients/maching-prefrence" element={<EmployeeList />} />
          <Route path="/employee/detail" element={<HireDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
