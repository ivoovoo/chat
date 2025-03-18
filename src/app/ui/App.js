import { useSelector } from "react-redux";
import { classNames } from "../../shared/lib/classNames/classNames";
import AppRouter from "../router/ui/AppRouter";

import "../styles/main.css";

function App() {
  const theme = useSelector((s) => s.theme);
  return <div className={classNames("app", [theme])}>{<AppRouter />}</div>;
}

export default App;
