import React from "react";
import "./Review.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import useActiveNav from "../../../../hooks/useActiveNav";
import Submit from "../../../../components/submit/Submit";

const Review = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("review", "review");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step4" />
      <div className="desktop-content">
        <Link to="/review">
          <Submit onClick={handleContinueClick} />
        </Link>
      </div>
    </>
  );
};

export default Review;
