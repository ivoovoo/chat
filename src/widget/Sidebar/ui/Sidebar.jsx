import React, { useState } from "react";
import Mode from "./Mode";
import Select from "../../../shared/ui/Select/Select";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import Check from "../../../shared/ui/Check/Check";
import Switcher from "../../../shared/ui/Switcher/Switcher";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const Sidebar = () => {
  const [switcher, changeSwitcher] = useState(true);
  return (
    <aside className="sidebar">
      <Link className="sidebar__logo" to={"/"}>
        CHATEX
      </Link>
      <Mode />
      <Select
        className="sidebar__select"
        list={['Version GPT 3.5F',"Version", "VVVV"]}
      />
      <div className="sidebar__checks">
        <Check>Show resource-link</Check>
        <Check>Show proposed prompt</Check>
        <Check>Dark mode</Check>
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
    </aside>
  );
};

export default Sidebar;
