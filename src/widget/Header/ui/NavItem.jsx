import React from "react";
import { Link } from "react-router-dom";
import Sprite from "../../../shared/ui/Sprite/Sprite";
import { classNames } from "../../../shared/lib/classNames/classNames";

const NavItem = ({ children, icon, className, ...other }) => {
  return (
    <Link className={classNames("header__link", [className])} {...other}>
      {children}
      <Sprite icon={icon} width={24} height={24} />
    </Link>
  );
};

export default NavItem;
