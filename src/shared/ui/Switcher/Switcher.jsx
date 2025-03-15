import React from "react";
import { classNames } from "../../lib/classNames/classNames";

import "./Switcher.css";

const Switcher = ({ first, second, className, bool, func }) => {
  return (
    <div className={classNames("switcher", [className])}>
      <button
        onClick={() => func(true)}
        className={classNames("switcher__button", [], {
          active: bool,
        })}
      >
        {first}
      </button>
      <button
        onClick={() => func(false)}
        className={classNames("switcher__button", [], {
          active: !bool,
        })}
      >
        {second}
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
