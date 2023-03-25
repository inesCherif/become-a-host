import React from "react";
import "./Size.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const Size = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("groupsize", "availability");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step4" />
      <div className="desktop-content">
        <Link to="/availability">
          <Button onClick={handleContinueClick} />
        </Link>
      </div>
    </>
  );
};

export default Size;
