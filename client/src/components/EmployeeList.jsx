import React from "react";
import "../styles/EmployeeList.css";

import HireFilters from "./HireFilters";
import HireEmpList from "./HireEmpList";

const EmployeeList = () => {
  return (
    <div className="employee-list">
      <div className="filter-container">
        <HireFilters />
      </div>
      <div className="employee-top-list">
        <HireEmpList />
      </div>
    </div>
  );
};

export default EmployeeList;
