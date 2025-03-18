import React, { useState } from "react";
import { mode } from "../config/mode";
import ModeItem from "./ModeItem";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveName } from "../../../features/Chat";

const Mode = () => {
  const chat = useSelector((s) => s.chat?.messages) || {};
  const chatKeys = Object.keys(chat);
  const dispatch = useDispatch()
  const chatActiveIndex = useSelector((s) => s.chat.activeName);

  const handleClick = (key) => {
    dispatch(changeActiveName(key));
  };
  return (
    <div className="sidebar__mode">
      {chatKeys.length > 0 && <h4 className="sidebar__mode-title">Mode</h4>}
      <div className="sidebar__items">
        {chatKeys.map((title, index) => (
          <ModeItem
            key={title}
            title={title}
            active={title == chatActiveIndex}
            handleClick={() => handleClick(title)}
          />
        ))}
      </div>
    </div>
  );
};

export default Mode;
