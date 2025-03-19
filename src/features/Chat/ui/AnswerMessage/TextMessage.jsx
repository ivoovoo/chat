import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { finishGenerate } from "../../model/chatSlice";

const TextMessage = ({ item }) => {
  const dispatch = useDispatch();
  const { message } = item;
  const {generate} = useSelector((s) => s.chat);
  const chat = useSelector((s) => s.chat);
  const [stateMessage, setStateMessage] = useState(item.writing ? "" : message);

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
    }, 20);

    return () => clearInterval(interval);
  }, [chat]);

  return <div className="chat__message">{stateMessage}</div>;
};

export default TextMessage;
