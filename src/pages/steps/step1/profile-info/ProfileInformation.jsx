import React from "react";
import Tips from "../../../../components/tips/Tips";
import ProfileInfoForm from "../../../../containers/profile-info/ProfileInfoForm";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const ProfileInformation = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "profile-info",
    "profile-photo"
  );
  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step1" />

      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Profile Information</h1>

          <Tips
            title="Tips"
            text="Guests want to know who’s hosting them. This must be your actual name,
                not the name of a business. Only your first name will appear on your
                page. If you have co-hosts, you'll be able to add them later."
          />

          <ProfileInfoForm />

          <span className="btn-position">
            <Link to="/photo">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfileInformation;
