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
  const useWindowHeight = () => {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
      const handleResize = () => {
        setHeight(window.innerHeight);
      };

      // Добавляем обработчик изменения размера окна
      window.addEventListener("resize", handleResize);

      // Удаляем обработчик при размонтировании компонента
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return height;
  };

  useWindowHeight();

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
    function updateViewportHeight() {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight / 100}px`
      );
    }

    window.addEventListener("resize", updateViewportHeight);
    updateViewportHeight();
  }, []);

  return (
    <div className={classNames("app", [theme])} ref={appRef} {...swipeHandlers}>
      {<AppRouter />}
    </div>
  );
}

export default App;
