import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../model/sidebarSlice";
import { classNames } from "../../../shared/lib/classNames/classNames";

const Button = ({ forOpen }) => {
  const dispatch = useDispatch();
  const sidebar = useSelector((s) => s.sidebar);
  const handleClick = () => {
    dispatch(changeState())
  };
  return (
    <button
      className={classNames("sidebar__button", [], { open:forOpen })}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Button;
