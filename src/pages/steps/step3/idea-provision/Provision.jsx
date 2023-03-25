import React from "react";
import "./Provision.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const Provision = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("provide", "requirements");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3" />
      <div className="desktop-content">
        <Link to="/requirements">
          <Button onClick={handleContinueClick} />
        </Link>
      </div>
    </>
  );
};

export default Provision;
