import React, { useState } from "react";


const Filter = ({ setFilter }) => {
    const [activeFilter, setActiveFilter] = useState("all");

    const handleFilterChange = (filter) => {
      setActiveFilter(filter);
      setFilter(filter);
    };
  return (
    <div className="filter-buttons">
      <button
        className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
        onClick={() => handleFilterChange("all")}
      >
        All
      </button>
      <button
        className={`filter-button ${activeFilter === "completed" ? "active" : ""}`}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </button>
      <button
        className={`filter-button ${activeFilter === "pending" ? "active" : ""}`}
        onClick={() => handleFilterChange("pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
