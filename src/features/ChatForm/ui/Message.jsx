import React from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const Message = () => {
  return (
    <form className="chat-form__message">
      <button className="chat-form__button file">
        <Sprite icon={"file"} width={20} height={20} />
      </button>
      <input className="chat-form__input" placeholder="Send a message " />
      <button className="chat-form__button microphone">
        <Sprite icon={"microphone"} width={20} height={20} />
      </button>
      <button className="chat-form__button send">
        <Sprite icon={"chat-send"} width={20} height={20} />
      </button>
    </form>
  );
};

export default Message;
