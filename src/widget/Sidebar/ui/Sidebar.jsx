import React, { useEffect, useRef, useState } from "react";
import Mode from "./Mode";
import Select from "../../../shared/ui/Select/Select";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import Check from "../../../shared/ui/Check/Check";
import Switcher from "../../../shared/ui/Switcher/Switcher";
import Sprite from "../../../shared/ui/Sprite/Sprite";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "../../../shared/lib/classNames/classNames";
import Hammer from "hammerjs";
import { changeState } from "../model/sidebarSlice";
const Sidebar = () => {
  const [switcher, changeSwitcher] = useState(true);
  const dispatch = useDispatch();
  const sidebarRef = useRef();
  useEffect(() => {
    const hammer = new Hammer(sidebarRef.current);

    hammer.on("swiperight", () => {
      dispatch(changeState(true));
    });

    hammer.on("swipeleft", () => {
      dispatch(changeState(false));
    });
  }, []);
  const sidebar = useSelector((s) => s.sidebar);
  return (
    <aside
      className={classNames("sidebar", [], { open: sidebar })}
      ref={sidebarRef}
    >
      <div className="sidebar__content">
        <Button forOpen={true} />
        <Link className="sidebar__logo" to={"/"}>
          CHATEX
        </Link>
        <Mode />
        <Select
          className="sidebar__select"
          list={["Version GPT 3.5F", "Version", "VVVV"]}
        />
        <div className="sidebar__checks">
          <Check className="sidebar__check">Show resource-link</Check>
          <Check className="sidebar__check">Show proposed prompt</Check>
          <Check className="sidebar__check">Dark mode</Check>
        </div>

        <Switcher
          bool={switcher}
          func={changeSwitcher}
          className={"sidebar__switcher"}
          first={
            <>
              History
              <Sprite icon="collection" width={16} height={16} />
            </>
          }
          second={
            <>
              Main
              <Sprite icon="chat-alt" width={16} height={16} />
            </>
          }
        />
      </div>
    </aside>
  );
};

export default Sidebar;
