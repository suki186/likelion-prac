import React, { Children } from "react";
import "./screen.scss";

const ScreenContainer = ({ children }) => {
  return <div className="ScreenContainer">{children}</div>;
};

export default ScreenContainer;
