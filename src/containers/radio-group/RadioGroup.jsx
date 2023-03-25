import React from "react";
import "./RadioGroup.css";
import Radio from "../../components/radio/Radio";

function RadioGroup(props) {
  return (
    <div className="radio-group">
      <label htmlFor="radio-group">
        <span className="second-label"> {props.label}</span>{" "}
        <span className="label">Select one option</span>.
      </label>
      {React.Children.map(props.children, (child) => {
        // Clone each child element and pass down the props to the Radio component
        return React.cloneElement(child, {
          name: props.name, 
        }); 
      })}
    </div>
  );
}

export default RadioGroup;
