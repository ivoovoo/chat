import React from "react";
import ChatDate from "./ChatDate";
import PinAngle from "./PinAngle";
import EditButton from "./EditButton";

import './UserMessage.css'

const UserMessage = ({ item, index }) => {
  return (
    <div className="chat__message chat__user-message">
      <div className="chat__message-flex">
        <ChatDate />
        <EditButton index={index} item={item} />
        <PinAngle index={index} pin={item.pin} />
      </div>
      <p className="chat__text"> {item.message}</p>
    </div>
  );
};

export default UserMessage;
