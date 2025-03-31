import React from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";
import {useSelector} from "react-redux";

const ModeItem = ({ active, title,  handleClick }) => {
  const generate = useSelector(s => s.chat.generate);
    return (
    <button className="sidebar__item" onClick={handleClick} disabled={generate}>
      <Sprite
        icon={active ? "checked" : "empty-checked"}
        width={24}
        height={24}
      />
      <div className="sidebar__item-wrapper">
        <h5 className="sidebar__item-title">{title}</h5>
      </div>
    </button>
  );
};

export default ModeItem;
