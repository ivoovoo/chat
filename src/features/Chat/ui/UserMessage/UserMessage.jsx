import React from "react";
import ChatDate from "../Chat/ChatDate";
import PinAngle from "./PinAngle";
import EditButton from "./EditButton";

import "./UserMessage.css";

const UserMessage = ({ item, index }) => {
  return (
    <div className="chat__user-message">
      <div className="chat__message-flex">
        <ChatDate />
        <EditButton index={index} item={item} />
        <PinAngle index={index} pin={item.pin} />
      </div>
      {item.message && (
        <p
          className="chat__text"
          style={{ marginBottom: item.files.length > 0 && "15px" }}
        >
          {" "}
          {item.message}
        </p>
      )}
      {item.files && (
        <div className="chat__files">
          {item.files.map((item) => (
            <div className="chat__file">
              {item.type.startsWith("image/") && (
                <img src={URL.createObjectURL(item)} alt={item.name} />
              )}

              {item.type.startsWith("video/") && (
                <video src={`${URL.createObjectURL(item)}`} alt={item.name} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserMessage;
