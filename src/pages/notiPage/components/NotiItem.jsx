import React from "react";
import "../noti.scss";

const NotiItem = ({ noti }) => {
  return (
    <div className="noti-item">
      <p>{noti.number}</p>
      <p className="noti-title">{noti.title}</p>
      <p>{noti.date}</p>
    </div>
  );
};

export default NotiItem;
