import React from "react";
import SignInput from "./components/SignInput";
import SignButton from "./components/SignButton";
import "./signup.scss";

const inputFields = [
  { label: "아이디", placeholder: "아이디를 입력하세요" },
  { label: "비밀번호", placeholder: "비밀번호를 입력하세요" },
  { label: "이메일", placeholder: "이메일을 입력하세요" },
  { label: "이름", placeholder: "이름을 입력하세요" },
  { label: "닉네임", placeholder: "닉네임을 입력하세요" },
];

const SignupPage = () => {
  return (
    <div className="SignupScreen">
      <p className="title">회원가입</p>
      <div className="SignupInputField">
        {inputFields.map((field, i) => (
          <SignInput
            key={i}
            label={field.label}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <SignButton title="가입하기" />
    </div>
  );
};

export default SignupPage;
