import React from "react";
import "./Pricing.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const Pricing = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("pricing", "bookings");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step4" />
      <div className="desktop-content">
        <Link to="/bookings">
          <Button onClick={handleContinueClick} />
        </Link>
      </div>
    </>
  );
};

export default Pricing;
