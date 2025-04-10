import React from "react";
import Check from "../../../../shared/ui/Check/Check";
import { changeInputSpeed, changeTheme } from "../../model/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";

import './Checks.css'

const Checks = () => {
  const dispatch = useDispatch();
  const { theme, inputSpeed } = useSelector((s) => s.sidebar);
  return (
    <div className="sidebar__checks">
      <Check
        className="sidebar__check"
        checked={inputSpeed === 80}
        onClick={(bool) => {
          dispatch(changeInputSpeed(bool));
        }}
      >
        Deep Mode
      </Check>
      <Check
        className="sidebar__check"
        checked={theme === "dark"}
        onClick={(bool) => {
          dispatch(changeTheme(bool ? "dark" : "light"));
        }}
      >
        Dark mode
      </Check>
    </div>
  );
};

export default Checks;
