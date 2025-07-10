import React from "react";
import "../signup.scss";

const SignButton = ({ title }) => {
  return (
    <div className="SignupButton">
      <p className="SignupButtonText">{title}</p>
    </div>
  );
};

export default SignButton;
