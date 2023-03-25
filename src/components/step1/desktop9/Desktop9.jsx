import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import "./Desktop9.css";
import Passion from "./Passion";
const Desktop9 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("passions");

  const handleContinueClick = () => {
    setSelectedNavItem("");
  };

  return (
    <div>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step1" />

      <div className="nav-container">
        <div className="desktop-content">
          <Passion />

          <Link to="/overview">
            <button
              className="button-text primary btn btn-position"
              onClick={handleContinueClick}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Desktop9;
