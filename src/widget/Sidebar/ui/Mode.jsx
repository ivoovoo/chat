import React, { useState } from "react";
import { mode } from "../config/mode";
import ModeItem from "./ModeItem";

const Mode = () => {
  const [modeItems, setModeItems] = useState([]);

  const handleClick = (i) => {
    const newModeItems = modeItems.map((item, index) => {
      if (i === index) {
        item.active = true;
      } else item.active = false;

      return item;
    });

    setModeItems(newModeItems);
  };
  return (
    <div className="sidebar__mode">
     {modeItems.length > 0 && <h4 className="sidebar__mode-title">Mode</h4>}
      <div className="sidebar__items">
        {modeItems.map(({ title, text, active }, index) => (
          <ModeItem
            key={title}
            title={title}
            text={text}
            active={active}
            handleClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Mode;
