import React from "react";
import "../noti.scss";

const NotiItem = ({ noti, onClick }) => {
  return (
    <div className="noti-item" onClick={onClick} style={{ cursor: "pointer" }}>
      <p>{noti.number}</p>
      <p className="noti-title">{noti.title}</p>
      <p>{noti.date}</p>
    </div>
  );
};

export default NotiItem;
