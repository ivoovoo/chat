import React from "react";
import { useDispatch } from "react-redux";
import { changePosition } from "../model/sidebarSlice";

const Button = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changePosition(false));
  };
  return (
    <button className={"sidebar__button"} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Button;
