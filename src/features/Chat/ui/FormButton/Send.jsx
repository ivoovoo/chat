import React from "react";
import { useDispatch } from "react-redux";
import { addMessage, sendMessageThunk } from "../../model/chatSlice";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import { startGenerate } from "../../model/chatSlice";

const Send = ({ text, files, setFiles }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!text.length && !files.length) return;
    dispatch(startGenerate());
    dispatch(addMessage({
      text:text,
      files:files
    }));
    if (files.length) {
      setFiles([]);
    }
    dispatch(sendMessageThunk(text));

  };

  return (
    <button className="form__button send" type="button" onClick={handleClick}>
      <Sprite icon={"chat-send"} width={20} height={20} />
    </button>
  );
};

export default Send;
