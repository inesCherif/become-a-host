import React from "react";
import "./Photos.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const Photos = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("photos", "groupsize");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3" />
      <div className="desktop-content">
        <Link to="/groupsize">
          <Button onClick={handleContinueClick} />
        </Link>
      </div>
    </>
  );
};

export default Photos;
