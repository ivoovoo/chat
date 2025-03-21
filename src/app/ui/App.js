import { useDispatch, useSelector } from "react-redux";
import { classNames } from "../../shared/lib/classNames/classNames";
import { useEffect, useRef, useState } from "react";
import { changePosition } from "../../widget/Sidebar";
import { useSwipeable } from "react-swipeable";
import { clickOut } from "../../shared/lib/clickOut/clickOut";
import FocusLock from 'react-focus-lock';
// import "../styles/main.css";

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

  const handleResize = () => {
    if (window.innerHeight < 800) {
      appRef.current.style.height = `${window.innerHeight}px`; // Уменьшаем высоту
    } else {
      appRef.current.style.height = "100vh"; // Восстанавливаем высоту
    }
  };

  const handleFocus = () => {
    handleResize(); // Перерасчитываем размер при фокусе на инпуте
  };

  const handleBlur = () => {
    setTimeout(handleResize, 100); // Перерасчитываем размер после потери фокуса
  };
  useEffect(() => {
    const handleResize = () => {
      const viewportHeight = window.visualViewport.height;
      document.documentElement.style.setProperty(
        "--vh",
        `${viewportHeight * 0.01}px`
      );
    };

    window.visualViewport.addEventListener("resize", handleResize);
    handleResize();

    return () =>
      window.visualViewport.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={classNames("app", [theme])} ref={appRef}>
      {/* {<AppRouter />} */}
      <ChatApp />
    </div>
  );
}


export default App


const ChatApp = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      // Если высота экрана уменьшилась, значит, клавиатура открыта
      if (window.innerHeight < document.documentElement.clientHeight) {
        setKeyboardVisible(true);
      } else {
        setKeyboardVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '50px',
          backgroundColor: '#3498db',
          color: 'white',
          textAlign: 'center',
          zIndex: 100,
        }}
      >
        Шапка
      </header>

      <main
        style={{
          flex: 1,
          paddingTop: '60px', // Отступ сверху для шапки
          paddingBottom: keyboardVisible ? '300px' : '10px', // Подстраиваем отступ снизу при открытой клавиатуре
          transition: 'padding-bottom 0.3s ease',
          overflowY: 'auto',
        }}
      >
        <div>
          <p>Привет! 👋</p>
          <p>Как дела?</p>
          <p>Продолжаем чат?</p>
        </div>
      </main>

      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '10px',
          backgroundColor: '#fff',
          borderTop: '1px solid #ddd',
        }}
      >
        <FocusLock>
          <input
            type="text"
            placeholder="Введите сообщение..."
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </FocusLock>
      </footer>
    </div>
  );
};

