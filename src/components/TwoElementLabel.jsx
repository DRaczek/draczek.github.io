import React from "react";
import "../css/TwoElementLabel.css";

function TwoElementLabel({
  containerClassName,
  firstElement,
  secondElement,
  firstElementTextColor,
}) {
  console.log(firstElementTextColor);
  return (
    <div className={"two_element_label " + containerClassName}>
      <label className="m-0">{firstElement}</label>
      <p className="m-0">{secondElement}</p>
    </div>
  );
}

export default TwoElementLabel;
