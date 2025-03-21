import React, { useState } from "react";
import Sprite from "../Sprite/Sprite";
import { classNames } from "../../lib/classNames/classNames";

import "./Check.css";

const Check = ({ children, className, checked, onClick = () => {} }) => {
  const [activeCheck, setActiveCheck] = useState(checked || false);

  const handleClick = () => {
    onClick(!activeCheck);
    setActiveCheck(!activeCheck);
  };

  return (
    <button className={classNames("check", [className])} onClick={handleClick}>
      <Sprite
        icon={activeCheck ? "checked" : "empty-checked"}
        width={24}
        height={24}
      />
      {children}
    </button>
  );
};

export default Check;
