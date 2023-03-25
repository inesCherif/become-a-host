import React from "react";
import "./Availability.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const Availability = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("availability", "pricing");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step4" />
      <div className="desktop-content">
        <Link to="/pricing">
          <Button onClick={handleContinueClick} />
        </Link>
      </div>
    </>
  );
};

export default Availability;
