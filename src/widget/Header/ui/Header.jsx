import React, { useEffect, useMemo, useState } from "react";
import logo from "../assets/logo.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePosition } from "../../Sidebar";

import "./Header.css";

const useKeyboardSize = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const vh = window.visualViewport?.height || window.innerHeight;
      const keyboardVisible = vh < window.innerHeight;

      setIsKeyboardOpen(keyboardVisible);
      setKeyboardHeight(keyboardVisible ? window.innerHeight - vh : 0);
    };

    window.visualViewport?.addEventListener("resize", handleResize);
    return () =>
      window.visualViewport?.removeEventListener("resize", handleResize);
  }, []);

  return { keyboardHeight, isKeyboardOpen };
};

const Header = () => {
  const dispatch = useDispatch();
  const formattedNumber = useMemo(() => {
    const activeNumber =
      Math.floor(Math.random() * (150000 - 35000 + 1)) + 35000;
    return activeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }, []);

  const { keyboardHeight, isKeyboardOpen } = useKeyboardSize();

  useEffect(() => {
    const app = document.querySelector(".app");
    if (isKeyboardOpen) {
      app.style.height = `calc(100dvh - ${keyboardHeight})`;
    } else {
      app.style.height = `100dvh`;
    }
  }, [keyboardHeight, isKeyboardOpen]);

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
        <div className="header__first-letters">GG</div>
        {/* Greg Gregor */}
        {keyboardHeight}
        <br />
        {isKeyboardOpen.toString()}
      </Link>
    </header>
  );
};

export default Header;
