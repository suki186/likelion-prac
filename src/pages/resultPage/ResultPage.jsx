import React from "react";
import ElementButton from "./ElementButton";
import "./result.scss";

const ResultPage = () => {
  return (
    <div>
      <h2>내 근로 결과지</h2>
      <div className="buttons">
        <ElementButton title="가산수당" />
        <ElementButton title="주휴수당" />
        <ElementButton title="야간근로수당" />
        <ElementButton title="연장근로수당" />
        <ElementButton title="휴일근로수당" />
      </div>
    </div>
  );
};

export default ResultPage;
