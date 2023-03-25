import React from "react";
import "./Locations.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const Locations = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("locations", "photos");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3" />
      <div className="desktop-content">
        <Link to="/photos">
          <Button onClick={handleContinueClick} />
        </Link>
      </div>
    </>
  );
};

export default Locations;
