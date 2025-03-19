import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import { useSelector } from "react-redux";
import UserMessage from "./UserMessage";
import AnswerMessage from "./AnswerMessage";
import Form from "../Form/Form";

const heights = {};

const others = [];

const Chat = () => {
  const chatActiveName = useSelector((s) => s.chat?.activeName);
  const [changedScroll, setChangedScroll] = useState(false);
  const [generate, setGenerate] = useState(false);
  const chat = useSelector((s) => s.chat.messages)[chatActiveName] || [];
  const [filterChat, setFilterChat] = useState([
    ...chat.filter((item) => {
      const [firstItem] = item;
      if (!firstItem.pin) return true;
      others.push(item);
    }),
    ...others,
  ]);

  const chatRef = useRef();
  const messagesRef = useRef();

  useEffect(() => {
    const chatMessagesTag = messagesRef.current;
    if (!chatActiveName) chatMessagesTag.style.height = "auto";
    else if (heights[chatActiveName]) {
      chatMessagesTag.style.height = heights[chatActiveName] + "px";
      chatRef.current.scrollTo({
        top: heights[chatActiveName],
      });
    }
  }, [chatActiveName]);

  useEffect(() => {
    chatRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
    });
    const others = [];
    setFilterChat([
      ...chat.filter((item) => {
        const [firstItem] = item;
        if (!firstItem.pin) return true;
        others.push(item);
      }),
      ...others,
    ]);
  }, [chat]);

  return (
    <div className="chat" ref={chatRef}>
      <div className="container chat__messages" ref={messagesRef}>
        {filterChat.map((item, index) => (
          <div className="chat__box" key={index}>
            {item.map((m, boxIndex) => {
              return m.answer ? (
                <AnswerMessage
                  key={boxIndex}
                  item={m}
                  setGenerate={setGenerate}
                  generate={generate}
                />
              ) : (
                <UserMessage key={boxIndex} item={m} index={index} />
              );
            })}
          </div>
        ))}
      </div>

      <Form
        changedScrollFunc={() => {}}
        setGenerate={setGenerate}
        generate={generate}
      />
    </div>
  );
};

export default Chat;
