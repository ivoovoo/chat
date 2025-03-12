import React from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const ModeItem = ({ active, title, text, handleClick }) => {
  return (
    <button className="sidebar__item" onClick={handleClick}>
      <Sprite
        icon={active ? "checked" : "empty-checked"}
        width={24}
        height={24}
      />
      <div className="sidebar__item-wrapper">
        <h5 className="sidebar__item-title">{title}</h5>
        <p className="sidebar__item-text">{text}</p>
      </div>
    </button>
  );
};

export default ModeItem;
