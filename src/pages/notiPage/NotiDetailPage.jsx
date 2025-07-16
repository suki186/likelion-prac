import React from "react";
import NotiDetailBox from "./components/NotiDetailBox";
import { useParams } from "react-router-dom";
import notis from "../../datas/notis.json";

const NotiDetailPage = () => {
  const { id } = useParams();

  return <NotiDetailBox noti={notis[id - 1]} />;
};

export default NotiDetailPage;
