import React from "react";

const Expertice = () => {
  return (
    <div>
      <div className="profile-info-container">
        <h1 className="header2 profile-info-title">Expertice</h1>

        <div className="tips2">
          <p className="body">
            We’re looking for passionate storytellers who can share a unique
            <br /> perspective and insider knowledge.
            <br /> This could include:
          </p>
          <div className="overview-list">
            <ul className="overview-list">
              <li className="body">&nbsp; Being a well-informed enthusiast</li>
              <li className="body">&nbsp; Having specialized training</li>
              <li className="body">&nbsp; Having achievements in your field</li>
            </ul>
          </div>
          <p className="body">
            Guests value hosts with a distinctive point of view they can’t
            easily find
            <br /> elsewhere.
          </p>
        </div>

        <div className="radio-group">
          <label htmlFor="radio1">
            <span className="second-label">
              {" "}
              Have you hosted this activity before?{" "}
            </span>{" "}
            <span className="label">Select one option</span> .
          </label>
          <br />
          <br />
          <input type="radio" id="radio1" name="activity-hosted" value="yes" />
          <label htmlFor="radio1">
            Yes, I’ve hosted or taught this activity professionally
          </label>
          <input type="radio" id="radio2" name="activity-hosted" value="no" />
          <label htmlFor="radio2">
            Yes, I’ve hosted this activity informally for friends or family
          </label>
          <input
            type="radio"
            id="radio3"
            name="activity-hosted"
            value="not-sure"
          />
          <label htmlFor="radio3">
            No, I’ve never hosted this activity before
          </label>
        </div>

        <div className="radio-group">
          <label htmlFor="radio4">
            <span className="second-label">
              Do you have a Tour guide License?
            </span>{" "}
            <span className="label">Select one option</span> .
          </label>
          <br />
          <input type="radio" id="radio4" name="guide" value="yes" />
          <label htmlFor="radio4">Yes, I’m a full time Tour guide</label>
          <input type="radio" id="radio5" name="guide" value="no" />
          <label htmlFor="radio5">
            No, I’ve no license but i’m a freelancer
          </label>
          <input type="radio" id="radio6" name="guide" value="not-sure" />
          <label htmlFor="radio6">No, I’ve another full time job</label>
        </div>
      </div>
    </div>
  );
};

export default Expertice;
