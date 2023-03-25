import React from "react";
import "./Title.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const Title = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("title", "do");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3" />
      <div className="desktop-content">
        <Link to="/do">
          <Button onClick={handleContinueClick} />
        </Link>
      </div>
    </>
  );
};

export default Title;
