import React from "react";
import SignInput from "./components/SignInput";
import SignButton from "./components/SignButton";
import "./signup.scss";

const inputFields = [
  { label: "아이디", placeholder: "아이디를 입력하세요" },
  { label: "비밀번호", placeholder: "비밀번호를 입력하세요" },
];

const SignupPage = () => {
  return (
    <div className="SignupScreen">
      <p className="title">로그인</p>
      <div className="SignupInputField">
        {inputFields.map((field, i) => (
          <SignInput
            key={i}
            label={field.label}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <SignButton title="로그인하기" />
    </div>
  );
};

export default SignupPage;
