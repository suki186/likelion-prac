import React from "react";
import ScreenContainer from "../../components/ScreenContainer";
import Header from "../../components/Header";
import MainBox from "./components/MainBox";
import "./main.scss";

const MainPage = () => {
  return (
    <ScreenContainer>
      <div></div>
      <div className="BoxContainer">
        <MainBox
          number="1"
          title="내 계약서 검토"
          subtitle={`우선 나의 근로계약서가 제대로 된 계약서인지를 검토해 봐야 해요\n근로 계약서에 유의깊게 봐야할 항목 확인!`}
        />
        <div className="EmptyBox"></div>
        <div className="EmptyBox"></div>
        <MainBox
          number="2"
          title="내 근로 정리"
          subtitle={`지피지기 백전백승!\n우선 나의 근로계약서가 제대로 된 계약서인지를 검토해 봐야 해요.`}
          style={{ paddingLeft: "2rem" }}
        />
        <MainBox
          number="3"
          title="네편 현답"
          subtitle={`지피지기 백전백승!\n우선 나의 근로계약서가 제대로 된 계약서인지를 검토해 봐야 해요.`}
        />
        <div className="EmptyBox"></div>
      </div>
    </ScreenContainer>
  );
};

export default MainPage;
