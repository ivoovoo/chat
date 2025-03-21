import { useDispatch, useSelector } from "react-redux";
import { classNames } from "../../shared/lib/classNames/classNames";
import { useEffect, useRef, useState } from "react";
import { changePosition } from "../../widget/Sidebar";
import { useSwipeable } from "react-swipeable";
import { clickOut } from "../../shared/lib/clickOut/clickOut";
import AppRouter from "../router/ui/AppRouter";

import "../styles/main.css";

function App() {
  const dispatch = useDispatch();
  const { theme, positionSidebar } = useSelector((s) => s.sidebar);

  const appRef = useRef();

  const handleClick = (e) => {
    const target = e.target;
    if (target.classList.contains("header__sidebar-button")) {
      return;
    }
    const closeSidebar = clickOut(e, positionSidebar);

    if (closeSidebar) {
      dispatch(changePosition(false));
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (window.innerWidth < 1100 && positionSidebar) {
        dispatch(changePosition(false));
      }
    },
    onSwipedRight: () => {
      if (window.innerWidth < 1100 && !positionSidebar) {
        dispatch(changePosition(true));
      }
    },
    onSwipedUp: () => {
      if (positionSidebar) {
        dispatch(changePosition(false));
      }
    },
    onSwipedDown: () => {
      if (positionSidebar) {
        dispatch(changePosition(false));
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    document.body.addEventListener("click", handleClick);

    return () => document.body.removeEventListener("click", handleClick);
  }, [positionSidebar]);

  useEffect(() => {
    swipeHandlers.ref(appRef.current);

    const handleResize = () => {
      if (window.innerHeight < 672) {
        appRef.current.style.height = `${window.innerHeight}px`; // Уменьшаем высоту
      } else {
        appRef.current.style.height = "100vh"; // Восстанавливаем высоту при закрытии клавиатуры
      }
    };

    window.addEventListener("resize", handleResize);

    // Вызываем handleResize сразу, чтобы при монтировании компонента установить правильную высоту
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={classNames("app", [theme])} ref={appRef}>
      
      {<AppRouter />}
    </div>
  );
}

export default App;
