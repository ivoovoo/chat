import React, { useState } from "react";
import { mode } from "../config/mode";
import ModeItem from "./ModeItem";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveName, FAVORITES_KEY } from "../../../features/Chat";

const Mode = ({ switcher }) => {
  const chat = useSelector((s) => s.chat?.messages) || {};
  const chatKeys = Object.keys(chat);
  const dispatch = useDispatch();
  const chatActiveName = useSelector((s) => s.chat.activeName);

  const handleClick = (key) => {
    dispatch(changeActiveName(key));
  };
  return (
    <div className="sidebar__mode">
      <h4 className="sidebar__mode-title">Mode</h4>
      {switcher ? (
        <div className="sidebar__items">
          {chatKeys
            .filter((key) => key !== "Favorites")
            .map((title) => (
              <ModeItem
                key={title}
                title={title}
                active={title == chatActiveName}
                handleClick={() => handleClick(title)}
              />
            ))}
        </div>
      ) : (
        <div className="sidebar__items">
          {chat[FAVORITES_KEY] && (
            <ModeItem
              title={FAVORITES_KEY}
              active={FAVORITES_KEY == chatActiveName}
              handleClick={() => handleClick(FAVORITES_KEY)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Mode;
