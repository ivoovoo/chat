import Content from "./Content";
import {  useSelector } from "react-redux";
import { classNames } from "../../../shared/lib/classNames/classNames";

import "./Sidebar.css";

const Sidebar = () => {
  const {positionSidebar} = useSelector((s) => s.sidebar);
  return (
    <aside className={classNames("sidebar", [], { open: positionSidebar })}>
      <Content />
    </aside>
  );
};

export default Sidebar;
