import React from "react";
import "./Requirements";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const Requirements = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("requirements", "locations");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3" />
      <div className="desktop-content">
        <Link to="/localisation">
          <Button onClick={handleContinueClick} />
        </Link>
      </div>
    </>
  );
};

export default Requirements;
