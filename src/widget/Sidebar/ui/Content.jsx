import React, { useState } from "react";
import Mode from "./Mode";
import Select from "../../../shared/ui/Select/Select";
import { Link } from "react-router-dom";
import Switcher from "../../../shared/ui/Switcher/Switcher";
import Sprite from "../../../shared/ui/Sprite/Sprite";
import Button from "./Button";
import Checks from "./Checks";

const Content = () => {
  const [switcher, changeSwitcher] = useState(true);

  return (
    <div className="sidebar__content">
      <Button forOpen={true} />
      <Link className="sidebar__logo" to={"/"}>
        AI
      </Link>
      <Mode />
      <Select
        className="sidebar__select"
        list={["AI 1.01.01", "AI 11.11.11 ", "AI MAN", "AI WOMEN"]}
      />

      <Checks />
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
  );
};

export default Content;
