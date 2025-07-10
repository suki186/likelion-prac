import React from "react";
import NotiItem from "./NotiItem";
import "../noti.scss";

const notis = [
  {
    number: "주요",
    title: "네편 설명서",
    date: "2024.05.03",
  },
  {
    number: "주요",
    title: "열심히 일하는 당신을 위한 '네편이 되겠습니다",
    date: "2024.05.03",
  },
  {
    number: "주요",
    title: "공지사항 1",
    date: "2024.05.03",
  },
  {
    number: "주요",
    title: "공지사항 2",
    date: "2024.05.03",
  },
  {
    number: "주요",
    title: "공지사항 3",
    date: "2024.05.03",
  },
  {
    number: "주요",
    title: "공지사항 4",
    date: "2024.05.03",
  },
  {
    number: "주요",
    title: "공지사항 5",
    date: "2024.05.03",
  },
];

const NotiContainer = () => {
  return (
    <div className="noti-container">
      {notis.map((item, index) => (
        <NotiItem key={index} noti={item} />
      ))}
    </div>
  );
};

export default NotiContainer;
