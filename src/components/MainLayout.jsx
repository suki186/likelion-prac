import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div
        style={{
          flex: 1,
          width: "60vw",
          margin: "0 auto", // 가운데 정렬
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
