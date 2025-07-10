import React from "react";
import "../signup.scss";

const SignInput = ({ label, placeholder }) => {
  const showButton = label === "아이디";

  return (
    <div className="SignupInput">
      <p className="label">{label}</p>
      <div className="inputWrapper">
        <input className="inputField" placeholder={placeholder} />
        {showButton && (
          <div className="optionButton">
            <p>중복확인</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInput;
