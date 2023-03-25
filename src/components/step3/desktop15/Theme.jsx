import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Animal from "../../../images/icons/animal.png";
import Art from "../../../images/icons/art.png";
import Culture from "../../../images/icons/culture.png";
import Drink from "../../../images/icons/drink.png";
import Entertainment from "../../../images/icons/entertainment.png";
import Food from "../../../images/icons/food.png";
import History from "../../../images/icons/history.png";
import Nature from "../../../images/icons/nature.png";
import Shop from "../../../images/icons/shop.png";
import Sport from "../../../images/icons/sport.png";
import Wellness from "../../../images/icons/wellness.png";

const Theme = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handlePopup = () => {
    setShowPopup(!showPopup);
  };
  const [showPopup2, setShowPopup2] = useState(false);
  const handlePopup2 = () => {
    setShowPopup(!showPopup2);
  };

  return (
    <div className="profile-info-container">
      <h1 className="header2 profile-info-title">
        What type of experience will you host?
      </h1>
      <div className="tips">
        <h2 className="body tips-title">Tips</h2>
        <p className="type16">
          Select a theme that best describes what guests will mainly be doing on
          your experience. This will help <br /> guests find and book your
          experience
        </p>
      </div>

      <div className="theme-selector-header">
        <span className="theme-selector-title">Select a theme</span>
      </div>

      <>
        <div className="theme-selector" onClick={handlePopup}>
          <div className="theme-selector-add">
            <AiFillPlusCircle className="theme-selector-icon" />
            <p className="theme-selector-add-text">Add a Principal theme</p>
          </div>
        </div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <div className="popup-header">
                <h3 className="popup-title">All themes</h3>
                <button className="popup-close" onClick={handlePopup}>
                  &times;
                </button>
              </div>
              <div className="popup-body">
                <div className="popup-grid">
                  <div className="popup-cell" onClick={handlePopup2}>
                    <img src={Animal} alt="" className="theme-icon" />
                    <p className="theme-label">Animals</p>
                  </div>
                  {showPopup2 && (
                    <div className="popup">
                      <div className="popup-content">
                        <div className="popup-header">
                          <h3 className="popup-title">All themes</h3>
                          <button className="popup-close" onClick={handlePopup2}>
                            &times;
                          </button>
                        </div>

                        <div className="popup-body">
                          <div className="popup-grid">
                            <div className="popup-cell">
                              <div className="theme-icon"></div>
                              <p className="theme-label">Animals</p>
                            </div>
                            <div className="popup-cell">
                              <div className="theme-icon"></div>
                              <p className="theme-label">Art &amp; Design</p>
                            </div>
                            <div className="popup-cell">
                              <div className="theme-icon"></div>
                              <p className="theme-label">
                                Culture &amp; Society
                              </p>
                            </div>
                            <div className="popup-cell">
                              <div className="theme-icon"></div>
                              <p className="theme-label">Food</p>
                            </div>
                            <div className="popup-cell">
                              <div className="theme-icon"></div>
                              <p className="theme-label">Drink</p>
                            </div>
                            <div className="popup-cell">
                              <div className="theme-icon"></div>
                              <p className="theme-label">Entertainment</p>
                            </div>
                            <div className="popup-cell">
                              <div className="theme-icon"></div>
                              <p className="theme-label">
                                History &amp; Literatures
                              </p>
                            </div>
                            <div className="popup-cell">
                              <div className="theme-icon"></div>
                              <p className="theme-label">
                                Nature &amp; Out door
                              </p>
                            </div>
                            <div className="popup-cell">
                              <div className="theme-icon"></div>
                              <p className="theme-label">
                                Signtsees, shopping <br /> &amp; Transportation
                              </p>
                            </div>
                            <div className="popup-cell">
                              <div className="theme-icon"></div>
                              <p className="theme-label">Sports</p>
                            </div>
                            <div className="popup-cell">
                              <div className="theme-icon"></div>
                              <p className="theme-label">Wellness</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="popup-cell">
                    <img src={Art} alt="" className="theme-icon" />
                    <p className="theme-label">Art &amp; Design</p>
                  </div>
                  <div className="popup-cell">
                    <img src={Culture} alt="" className="theme-icon" />
                    <p className="theme-label">Culture &amp; Society</p>
                  </div>
                  <div className="popup-cell">
                    <img src={Food} alt="" className="theme-icon" />
                    <p className="theme-label">Food</p>
                  </div>
                  <div className="popup-cell">
                    <img src={Drink} alt="" className="theme-icon" />
                    <p className="theme-label">Drink</p>
                  </div>
                  <div className="popup-cell">
                    <img src={Entertainment} alt="" className="theme-icon" />
                    <p className="theme-label">Entertainment</p>
                  </div>
                  <div className="popup-cell">
                    <img src={History} alt="" className="theme-icon" />
                    <p className="theme-label">History &amp; Literatures</p>
                  </div>
                  <div className="popup-cell">
                    <img src={Nature} alt="" className="theme-icon" />
                    <p className="theme-label">Nature &amp; Out door</p>
                  </div>
                  <div className="popup-cell">
                    <img src={Shop} alt="" className="theme-icon" />
                    <p className="theme-label">
                      Signtsees, shopping <br /> &amp; Transportation
                    </p>
                  </div>
                  <div className="popup-cell">
                    <img src={Sport} alt="" className="theme-icon" />
                    <p className="theme-label">Sports</p>
                  </div>
                  <div className="popup-cell">
                    <img src={Wellness} alt="" className="theme-icon" />
                    <p className="theme-label">Wellness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Theme;
