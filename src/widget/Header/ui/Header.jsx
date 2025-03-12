import React from "react";
import logo from "../assets/logo.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__left-wrapper">
          <span>Standard plan</span>
          <div className="header__active">Active 35 000 people</div>
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
