import React from "react";
import NotiItem from "./NotiItem";
import "../noti.scss";
import { useNavigate } from "react-router-dom";
import notis from "../../../datas/notis.json";

const NotiContainer = () => {
  const navigation = useNavigate();
  const goDetailHandler = (id) => {
    navigation(`detail/${id}`);
  };

  return (
    <div className="noti-container">
      {notis.map((item, index) => (
        <NotiItem
          key={index}
          noti={item}
          onClick={() => goDetailHandler(item.id)}
        />
      ))}
    </div>
  );
};

export default NotiContainer;
