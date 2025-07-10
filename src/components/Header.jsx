import React from "react";
import "./header.scss";
import LOGO from "../assets/yourside-signup-logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <div>
        <img src={LOGO} />
      </div>
      <div className="HeaderOption">
        <p>홈</p>
        <p>공지사항</p>
        <p>내 계약서 검토</p>
        <p>내 근로 정리</p>
        <p>네편 현답</p>
      </div>
    </div>
  );
};

export default Header;
