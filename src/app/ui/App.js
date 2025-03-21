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

export default App;




const ChatApp = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const handleFocus = () => {
      setKeyboardVisible(true);
    };
    
    const handleBlur = () => {
      setKeyboardVisible(false);
    };

    const inputField = document.querySelector(".chat-input");
    inputField.addEventListener("focus", handleFocus);
    inputField.addEventListener("blur", handleBlur);

    return () => {
      inputField.removeEventListener("focus", handleFocus);
      inputField.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <div className={`app-container ${keyboardVisible ? "keyboard-visible" : ""}`}>
      <header className="header">🔝 Шапка</header>

      <main className="chat-container">
        <div className="chat-messages">
          <p>Привет! 👋</p>
          <p>Как дела?</p>
        </div>
      </main>

      <footer className="chat-input-container">
        <input type="text" placeholder="Введите сообщение..." className="chat-input" />
      </footer>
    </div>
  );
};

export default ChatApp;
