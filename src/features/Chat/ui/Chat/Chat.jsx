import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Box from "./Box";

import "./Chat.css";
import {useScrollBehavior} from "../../lib/hooks/useScrollBehavior";



const Chat = () => {
  const chatRef = useRef();
  const messagesRef = useRef();
  const {messages,activeName} = useSelector((s) => s.chat);
  useScrollBehavior(chatRef, messagesRef);



  return (
    <div className="chat" ref={chatRef}>
      <div className="container chat__messages" ref={messagesRef}>
        {messages[activeName] &&
            messages[activeName].map((box, index) => (
            <Box box={box} key={index} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Chat;
