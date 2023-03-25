import React from "react";
import "./Bookings.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const Bookings = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("bookings", "review");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step4" />
      <div className="desktop-content">
        <Link to="/review">
          <Button onClick={handleContinueClick} />
        </Link>
      </div>
    </>
  );
};

export default Bookings;
