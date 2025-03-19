import React, { useEffect, useRef } from "react";
import Content from "./Content";
import Hammer from "hammerjs";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { changeState } from "../model/sidebarSlice";

import "./Sidebar.css";

const Sidebar = () => {
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
      <Content />
    </aside>
  );
};

export default Sidebar;
