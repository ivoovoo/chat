import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import { useSelector } from "react-redux";
import UserMessage from "./UserMessage";
import AnswerMessage from "./AnswerMessage";
import Form from "../Form/Form";

const heights = {};

const Chat = () => {
  const chatActiveName = useSelector((s) => s.chat?.activeName);
  const [changedScroll, setChangedScroll] = useState(false);
  const [generate, setGenerate] = useState(false);
  const chat = useSelector((s) => s.chat.messages);

  const chatRef = useRef();
  const messagesRef = useRef();

  useEffect(() => {
    console.log(heights);
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
    if (changedScroll) {
      const chatMessagesTag = messagesRef.current;
      const chatTag = chatRef.current;

      if (chatMessagesTag && chat[chatActiveName].length > 1) {
        const boxes = [...chatMessagesTag.children];

        const lastBoxHeight = boxes[boxes.length - 2].offsetHeight;

        const messagesHeight = chatMessagesTag.offsetHeight;
        const chatTagHeight = chatTag.offsetHeight - 20;

        console.log({ lastBoxHeight, chatTagHeight, messagesHeight });

        const num = chatMessagesTag.offsetHeight;


        if (lastBoxHeight > chatTagHeight) {
          chatMessagesTag.style.height =
            num + chatTagHeight + (lastBoxHeight - chatTagHeight) + 8 + "px";
        } else chatMessagesTag.style.height = num + lastBoxHeight + 8 + "px";

        heights[chatActiveName] = chatMessagesTag.offsetHeight;

        chatTag.scrollTo({
          top: chatTag.scrollHeight + 300,
          behavior: "smooth",
        });
      }

      setChangedScroll(false);
    }
  }, [changedScroll, chat]);
  return (
    <div className="chat" ref={chatRef}>
      <div className="container chat__messages" ref={messagesRef}>
        {chat[chatActiveName] &&
          chat[chatActiveName].map((item, index) => (
            <div className="chat__box" key={index}>
              {item.map((m, index) => {
                return m.answer ? (
                  <AnswerMessage
                    key={index}
                    item={m}
                    setGenerate={setGenerate}
                    generate={generate}
                  />
                ) : (
                  <UserMessage key={index} item={m} />
                );
              })}
            </div>
          ))}
      </div>

      <Form
        changedScrollFunc={() => setChangedScroll(true)}
        setGenerate={setGenerate}
        generate={generate}
      />
    </div>
  );
};

export default Chat;
