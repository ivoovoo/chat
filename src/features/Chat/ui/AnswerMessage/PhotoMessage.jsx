import React from "react";
import LinkAnswer from "./LinkAnswer";

const PhotoMessage = ({ item }) => {
  return (
    <div className="chat__message-photos">
      <div className="chat__message-grid">
        {item.message.map((image) => {
          return (
            <div className="chat__message-photo">
              <img src={image} alt="image" />
            </div>
          );
        })}
      </div>
      <div className="chat__message-links">
        <LinkAnswer path={"twitch.com/prompt"}>twitch.com/prompt</LinkAnswer>
        <LinkAnswer path={"unsplash.com"}>unsplash.com</LinkAnswer>
        <LinkAnswer path={"behance.com"}>behance.com</LinkAnswer>
      </div>
    </div>
  );
};

export default PhotoMessage;
