import React from "react";
import ButtonIcon from "../../../shared/ui/ButtonIcon/ButtonIcon";
import Sprite from "../../../shared/ui/Sprite/Sprite";

import "./ChatForm.css";
import Top from "./Top";
import Message from "./Message";

const ChatForm = () => {
  return (
    <div className="chat-form">
      <div className="container">
        <Top />
        <Message />
      </div>
    </div>
  );
};

export default ChatForm;
