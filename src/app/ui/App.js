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

  const height = useWindowHeight();

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
    window.addEventListener('resize', function() {
      if (window.innerHeight < 500) { // Когда высота экрана становится меньше 500px
        document.body.style.height = window.innerHeight + 'px'; // Уменьшаем высоту body
      } else {
        document.body.style.height = '100%'; // Восстанавливаем высоту при закрытии клавиатуры
      }
    });
  }, []);

  return (
    <div
      className={classNames("app", [theme])}
      ref={appRef}
      {...swipeHandlers}
      style={{ height: height }}
    >
      {<AppRouter />}
    </div>
  );
}

export default App;
