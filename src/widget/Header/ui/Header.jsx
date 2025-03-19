import React, {useMemo} from "react";
import logo from "../assets/logo.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

import "./Header.css";
import Button from "../../Sidebar/ui/Button";

const Header = () => {
  const formattedNumber = useMemo(() => {
    const activeNumber =
      Math.floor(Math.random() * (150000 - 35000 + 1)) + 35000;
    return activeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }, []);

  return (
    <header className="header">
      <div className="header__left">
        <Button />
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__left-wrapper">
          <span>Standard plan</span>
          <div className="header__active">Active {formattedNumber} people</div>
        </div>
      </div>
      <Navigation />
      <Link className="header__right-link">
        <div className="header__first-letters">GG</div>
        Greg Gregor
      </Link>
    </header>
  );
};

export default Header;
