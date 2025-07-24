import React, { useState } from "react";
import "./result.scss";

/*
배열로 버튼들의 상태 만든다
const [selected, setSelected] = useState([]);
const toggleHandler=(option)=> {
    setSelected(prev) => {
        prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option];
    }
}
*/
const ElementButton = ({ title }) => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  const classname = (click) => {
    if (click) return "toggle-on";
    else return "toggle-off";
  };
  return (
    <div className={classname(click)} onClick={toggle}>
      {title}
    </div>
  );
};

export default ElementButton;
