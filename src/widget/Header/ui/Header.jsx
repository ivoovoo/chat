import React, {  useMemo } from "react";
import logo from "../assets/logo.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePosition } from "../../Sidebar";

import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const formattedNumber = useMemo(() => {
    const activeNumber =
      Math.floor(Math.random() * (150000 - 35000 + 1)) + 35000;
    return activeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }, []);

  const handleClick = () => {
    dispatch(changePosition(true));
  };
  return (
    <header className="header">
      <div className="header__left">
        <button className="header__sidebar-button" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__left-wrapper">
          <span>Standard plan</span>
          <div className="header__active">Active {formattedNumber} people</div>
        </div>
      </div>
      <Navigation />
      <Link className="header__right-link">
        <div className="header__first-letters">AI</div>
        Active Intellect
      </Link>
    </header>
  );
};

export default Header;
