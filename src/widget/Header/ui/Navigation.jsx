import React from "react";
import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <nav className="header__nav">
      <NavItem className={"first"} to="/" icon={"lightning"}>
        Upgrade Plan
      </NavItem>
      <NavItem to="/" icon={"help-circle"}>
        Help
      </NavItem>
      <NavItem to="/" icon={"link-angled"}>
        API
      </NavItem>
    </nav>
  );
};

export default Navigation;
