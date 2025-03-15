import React, { useState } from "react";
import Mode from "./Mode";
import Select from "../../../shared/ui/Select/Select";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import Check from "../../../shared/ui/Check/Check";
import Switcher from "../../../shared/ui/Switcher/Switcher";
import Sprite from "../../../shared/ui/Sprite/Sprite";
import Button from "./Button";
import { useSelector } from "react-redux";
import { classNames } from "../../../shared/lib/classNames/classNames";

const Sidebar = () => {
  const [switcher, changeSwitcher] = useState(true);
  const [open, setOpen] = useState(false)
  const sidebar = useSelector((s) => s.sidebar);
  return (
    <aside className={classNames("sidebar", [], {open})}>
      <Link className="sidebar__logo" to={"/"}>
        CHATEX
      </Link>
      <Mode />
      <Select
        className="sidebar__select"
        list={['Version GPT 3.5F',"Version", "VVVV"]}
      />
      <div className="sidebar__checks">
        <Check className='sidebar__check'>Show resource-link</Check>
        <Check className='sidebar__check'>Show proposed prompt</Check>
        <Check className='sidebar__check'>Dark mode</Check>
      </div>

      <Switcher
        bool={switcher}
        func={changeSwitcher}
        className={"sidebar__switcher"}
        first={
          <>
            History
            <Sprite icon="collection" width={16} height={16}  />
          </>
        }
        second={
          <>
            Main
            <Sprite icon="chat-alt" width={16} height={16}  />
          </>
        }
      />
      <Button open={open} setOpen={setOpen} />
    </aside>
  );
};

export default Sidebar;
