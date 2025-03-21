import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Box from "./Box";
import Form from "../Form/Form";

import "./Chat.css";

const heights = {};

const Chat = () => {
  const chatActiveName = useSelector((s) => s.chat?.activeName);
  const formRef = useRef();
  const chat = useSelector((s) => s.chat.messages);
  const [files, setFiles] = useState([]);
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
  }, [chat]);

  return (
    <>
      <div
        className="chat"
        style={{
          // paddingBottom: files.length > 0 ? "180px" : "120px",
        }}
        ref={chatRef}
      >
        <div className="container chat__messages" ref={messagesRef}>
          {chat[chatActiveName] &&
            chat[chatActiveName].map((box, index) => (
              <Box box={box} key={index} index={index} />
            ))}
        </div>
      </div>
      <Form files={files} setFiles={setFiles} />
    </>
  );
};

export default Chat;
