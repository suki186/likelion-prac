import React from "react";
import "./header.scss";
import LOGO from "../assets/yourside-signup-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div>
        <img src={LOGO} />
      </div>
      <div className="HeaderOption">
        <Link to="/home">
          <p>홈</p>
        </Link>
        <Link to="/noti">
          <p>공지사항</p>
        </Link>
        <p>내 계약서 검토</p>
        <p>내 근로 정리</p>
        <Link to="/post">
          <p>네편 현답</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
