import React from "react";
import "../post.scss";

const SegmentedControl = ({ options, selected, onChange }) => {
  return (
    <div className="segmented-container">
      {options.map((option) => (
        <button
          key={option}
          className={`segmented-button ${
            selected === option ? "selected" : ""
          }`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
