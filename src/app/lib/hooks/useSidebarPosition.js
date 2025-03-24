import { useDispatch, useSelector } from "react-redux";
import { changePosition } from "../../../widget/Sidebar";
import { useEffect } from "react";

export const useSidebarPosition = () => {
  const dispatch = useDispatch();
  const { positionSidebar } = useSelector((s) => s.sidebar);
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

  useEffect(() => {
    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, [positionSidebar]);
};

function clickOut(e, sidebarBool) {
  if (window.innerWidth > 1100 || !sidebarBool) return;
  const target = e.target;
  const sidebar = document.querySelector(".sidebar");
  console.log(target, sidebarBool);
  if (!sidebar.contains(target)) {
    return true;
  }
}
