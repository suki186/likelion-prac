import React from "react";
import "../main.scss";

const MainBox = ({ number, title, subtitle, style }) => {
  // \n 기준으로 줄바꿈
  const formatSubtitle = subtitle.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div className="BoxItem" style={style}>
      <div className="BoxNumber">{number}</div>
      <div className="BoxTitle">{title}</div>
      <div className="BoxSub">{formatSubtitle}</div>
      <div>
        <div className="GoButton">바로가기&ensp;&gt;</div>
      </div>
    </div>
  );
};

export default MainBox;
