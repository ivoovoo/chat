import React, { useEffect, useState } from "react";
import ChatDate from "./ChatDate";
import { useDispatch, useSelector } from "react-redux";
import { offWriting } from "../../model/chatSlice";

const AnswerMessage = ({ item,generate, setGenerate }) => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState(item.writing ? "" : item.message);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!item.writing) return;

    const interval = setInterval(() => {
      setMessage((prev) => prev + item.message[index]); 
      setIndex((prevIndex) => prevIndex + 1); 

      if (index >= item.message.length - 1 || !generate) {
        clearInterval(interval);
        dispatch(offWriting(item));
        setGenerate(false)
      }
    }, 20);

    return () => clearInterval(interval); 
  }, [index, generate]); 

  return (
    <div className="chat__message">
      <ChatDate />
      {message}
    </div>
  );
};

export default AnswerMessage;
