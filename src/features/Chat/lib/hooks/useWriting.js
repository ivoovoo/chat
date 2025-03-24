import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { finishGenerate } from "../../model/chatSlice";

export const useWriting = (setStateMessage, item) => {
  const { generate } = useSelector((s) => s.chat);
  const { inputSpeed } = useSelector((s) => s.sidebar);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!generate || !item.writing) return;
    let i = 0;
    const interval = setInterval(() => {
      setStateMessage((prev) => prev + item.message[i]);
      i++;
      if (i >= item.message.length - 1 || !generate) {
        clearInterval(interval);
        dispatch(finishGenerate());
      }
    }, inputSpeed || 20);

    return () => clearInterval(interval);
  }, [generate, inputSpeed]);
};
