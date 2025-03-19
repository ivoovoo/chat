import React from "react";
import ChatDate from "./ChatDate";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import PinAngle from "./PinAngle";

const UserMessage = ({ item, index }) => {
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
        <PinAngle index={index} pin={item.pin}/>
      </div>
    </div>
  );
};

export default UserMessage;
