import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import "./Desktop5.css";
import Profileinfo from "./Profileinfo";

const Desktop5 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("profile-info");

  const handleContinueClick = () => {
    setSelectedNavItem("profile-photo");
  };
  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step1" />

      <Link to="/profile">
        <button onClick={handleContinueClick}>Continue</button>
      </Link>
    </>
  );
};

export default Desktop5;
