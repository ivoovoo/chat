import React, { useEffect, useState } from "react";
import ChatDate from "./ChatDate";
import { useDispatch, useSelector } from "react-redux";
import { offWriting } from "../model/chatSlice";
import { scrollPosition } from "../../../shared/lib/scrollPosition/scrollPosition";
import { finishGenerate } from "../../../features/ChatForm";

const AnswerMessage = ({ item }) => {
  const dispatch = useDispatch();
  const generate = useSelector((s) => s.chatForm);
  const [message, setMessage] = useState(item.writing ? "" : item.message);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!item.writing) return;

    const interval = setInterval(() => {
      setMessage((prev) => prev + item.message[index]); // Добавляем букву
      setIndex((prevIndex) => prevIndex + 1); // Увеличиваем индекс
      scrollPosition();


      if (index >= item.message.length - 1 || !generate) {
        clearInterval(interval);
        dispatch(offWriting(item));
        dispatch(finishGenerate());
      }
    }, 20);

    return () => clearInterval(interval); // Чистим интервал при размонтировании

  }, [index, generate]); // Зависимость от index и generate

  return (
    <div className="chat__message">
      <ChatDate />
      {message}
    </div>
  );
};

export default AnswerMessage;
