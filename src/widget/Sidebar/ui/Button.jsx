import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../model/sidebarSlice";

const Button = ({setOpen, open}) => {
  const dispatch = useDispatch();
  const sidebar = useSelector((s) => s.sidebar);
  const handleClick = () => {
    setOpen(b => !b)
  };
  return (
    <button className="sidebar__button" onClick={handleClick}>
      {open ? "Close" : "Open"}
    </button>
  );
};

export default Button;
