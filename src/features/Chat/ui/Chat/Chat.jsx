import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Box from "./Box";

import "./Chat.css";


const Chat = () => {
  const chatActiveName = useSelector((s) => s.chat?.activeName);
  const chat = useSelector((s) => s.chat.messages);
  const chatRef = useRef();
  const messagesRef = useRef();

  useEffect(() => {
    chatRef.current.scrollTo({
      top:chatRef.current.scrollHeight
    })
  
  }, [chatActiveName]);

  useEffect(() => {
    chatRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
    });
  }, [chat]);

  return (
    <div className="chat" ref={chatRef}>
      <div className="container chat__messages" ref={messagesRef}>
        {chat[chatActiveName] &&
          chat[chatActiveName].map((box, index) => (
            <Box box={box} key={index} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Chat;
