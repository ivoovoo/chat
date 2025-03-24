import { useSelector } from "react-redux";
import { classNames } from "../../shared/lib/classNames/classNames";
import { useRef } from "react";
import { useSwipeHandles } from "../lib/hooks/useSwipeHandlers";
import { useSidebarPosition } from "../lib/hooks/useSidebarPosition";
import AppRouter from "../router/ui/AppRouter";

import "../styles/main.css";

function App() {
  const { theme } = useSelector((s) => s.sidebar);
  const appRef = useRef();
  useSwipeHandles(appRef);
  useSidebarPosition();

  return (
    <div className={classNames("app", [theme])} ref={appRef}>
      <AppRouter />
    </div>
  );
}

export default App;
