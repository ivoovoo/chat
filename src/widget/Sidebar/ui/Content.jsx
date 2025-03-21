import React, { useState } from "react";
import Mode from "./Mode";
import Select from "../../../shared/ui/Select/Select";
import { Link } from "react-router-dom";
import Switcher from "../../../shared/ui/Switcher/Switcher";
import Button from "./Button";
import Checks from "./Checks";

const Content = () => {
  const [switcher, changeSwitcher] = useState(false);

  return (
    <div className="sidebar__content">
      <Button forOpen={true} />
      <Link className="sidebar__logo" to={"/"}>
        AI
      </Link>
      <Mode switcher={switcher} />
      <Select
        className="sidebar__select"
        list={["AI 1.01.01", "AI 11.11.11 ", "AI MAN", "AI WOMEN"]}
      />

      <Checks />
      <Switcher
        bool={switcher}
        func={changeSwitcher}
        className={"sidebar__switcher"}
        first={{
          title: "History",
          icon: "collection",
        }}
        second={{
          title: "Main",
          icon: "chat-alt",
        }}
      />
    </div>
  );
};

export default Content;
