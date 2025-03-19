import React from "react";
import Check from "../../../shared/ui/Check/Check";
import {
  changeTheme,
  THEME_CHATEX_VALUE,
} from "../../../shared/model/themeSlice";
import { useDispatch } from "react-redux";

const Checks = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar__checks">
      <Check className="sidebar__check">Show resource-link</Check>
      <Check className="sidebar__check">Show proposed prompt</Check>
      <Check
        className="sidebar__check"
        checked={localStorage.getItem(THEME_CHATEX_VALUE) == "dark"}
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
