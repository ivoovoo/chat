import React from "react";
import "./Chat.css";
import { useSelector } from "react-redux";
import UserMessage from "./UserMessage";
import AnswerMessage from "./AnswerMessage";

const Chat = () => {
  const chat = useSelector((s) => s.chat);
  return (
    <div className="chat">
      <div className="container chat__messages">
        {chat.map((item) => (
          item.answer ? <AnswerMessage item={item} /> : <UserMessage item={item} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
