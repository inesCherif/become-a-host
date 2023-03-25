import React from "react";
import "./Act.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const Act = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("do", "provide");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3" />
      <div className="desktop-content">
        <Link to="/provide">
          <Button onClick={handleContinueClick} />
        </Link>
      </div>
    </>
  );
};

export default Act;
