import React, { useEffect, useMemo, useState } from "react";
import logo from "../assets/logo.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePosition } from "../../Sidebar";

import "./Header.css";

// const useKeyboardSize = () => {
//   return { keyboardHeight, isKeyboardOpen };
// };

const Header = () => {
  const dispatch = useDispatch();
  const formattedNumber = useMemo(() => {
    const activeNumber =
      Math.floor(Math.random() * (150000 - 35000 + 1)) + 35000;
    return activeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }, []);

  // const { keyboardHeight, isKeyboardOpen } = useKeyboardSize();
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const vh =
        window.visualViewport?.height || document.documentElement.clientHeight;
      const keyboardVisible = vh < window.innerHeight; // Проверяем, открыта ли клавиатура

      setIsKeyboardOpen(keyboardVisible);
      setKeyboardHeight(keyboardVisible ? window.innerHeight - vh : 0);

      // Устанавливаем новую высоту для .app
      document.documentElement.style.setProperty("--app-height", `${vh}px`);
    };

    window.visualViewport?.addEventListener("resize", handleResize);
    handleResize(); // Инициализируем сразу

    return () =>
      window.visualViewport?.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const app = document.querySelector(".app");
    if (app && isKeyboardOpen) {
      app.style.paddingBottom = keyboardHeight + "px";
    } else if (app) {
      app.style.paddingBottom = "0px"; // Убираем paddingBottom, если клавиатура не открыта
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
