import { useDispatch, useSelector } from "react-redux";
import { addMessage, sendMessageThunk } from "../../../Chat";
import { setFiles, setText } from "../../model/composerSlice";

export const useSend = () => {
  const { text, files } = useSelector((s) => s.composer);
  const dispatch = useDispatch();
  if (!text.length && !files.length) return;
  return () => {
    const message = { text, files };
    dispatch(addMessage(message));
    dispatch(sendMessageThunk(text));
    dispatch(setText(""));

    if (files.length) {
      dispatch(setFiles([]));
    }
  };
};
