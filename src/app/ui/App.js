import { useDispatch, useSelector } from "react-redux";
import { classNames } from "../../shared/lib/classNames/classNames";
import { useEffect, useRef } from "react";
import { clickOut } from "../../shared/lib/clickOut/clickOut";
import { changeState } from "../../widget/Sidebar";
import AppRouter from "../router/ui/AppRouter";
import Hammer from "hammerjs";

import "../styles/main.css";

function App() {
  const appRef = useRef();
  const dispatch = useDispatch();
  const theme = useSelector((s) => s.theme);
  const sidebar = useSelector((s) => s.sidebar);

  const handleClick = (e) => {
    const closeSidebar = clickOut(e, sidebar);

    if (closeSidebar) {
      dispatch(changeState(false));
    }
  };

  useEffect(() => {
    const app = appRef.current;
    const hammer = new Hammer(app);
    app.addEventListener("click", handleClick);
    hammer.on("swipe", handleClick);
    return () => {
      hammer.remove("swipe", handleClick);
      app.removeEventListener("click", handleClick);
    };
  }, [sidebar]);

  return (
    <div className={classNames("app", [theme])} ref={appRef}>
      {<AppRouter />}
    </div>
  );
}

export default App;
