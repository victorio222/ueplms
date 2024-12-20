import React from "react";
import "./Spinner.css";

const Spinner = ({ overlay = false }) => {
  return (
    <div className={`spinner-container ${overlay ? "overlay" : ""}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
