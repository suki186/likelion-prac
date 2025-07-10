import React from "react";
import "../noti.scss";

const NotiDetailBox = ({ noti }) => {
  return (
    <div className="notiBox">
      <div className="notiBox-line">
        <p>{noti.title}</p>
        <p>{noti.number}</p>
      </div>
      <p>{noti.date}</p>
    </div>
  );
};

export default NotiDetailBox;
