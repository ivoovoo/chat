import React from "react";
import { classNames } from "../../lib/classNames/classNames";

import "./Switcher.css";
import Sprite from "../Sprite/Sprite";

const Switcher = ({ first, second, className, bool, func }) => {
  return (
    <div className={classNames("switcher", [className])}>
      <button
        onClick={() => func(true)}
        className={classNames("switcher__button", [], {
          active: bool,
        })}
      >
        {first.title}
        <Sprite icon={first.icon} width={16} height={16} />
      </button>
      <button
        onClick={() => func(false)}
        className={classNames("switcher__button", [], {
          active: !bool,
        })}
      >
        {second.title}
        <Sprite icon={second.icon} width={16} height={16} />
      </button>
      <div
        className={classNames("switcher__background", [], {
          position: bool,
        })}
      ></div>
    </div>
  );
};

export default Switcher;
