import { useDispatch, useSelector } from "react-redux";
import { useSwipeable } from "react-swipeable";
import { changePosition } from "../../../widget/Sidebar";
import { useEffect } from "react";

export const useSwipeHandles = (ref) => {
  const { positionSidebar } = useSelector((s) => s.sidebar);
  const dispatch = useDispatch();

  const swipedHandles = useSwipeable({
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
    swipedHandles.ref(ref.current);
  }, []);
};
