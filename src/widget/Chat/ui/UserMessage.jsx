import React from "react";
import ChatDate from "./ChatDate";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const UserMessage = ({ item }) => {
  return (
    <div className="chat__message chat__user-message">
      <div className="chat__wrapper">
        <ChatDate />
        <p className="chat__text"> {item.message}</p>
      </div>
      <div className="chat__message-flex">
        <button className="chat__edit">
          <Sprite width={24} height={24} icon={"edit"} />
        </button>
        <button className="chat__pin-angle">
          <Sprite width={24} height={24} icon={"pin-angle"} />
        </button>
      </div>
    </div>
  );
};

export default UserMessage;
