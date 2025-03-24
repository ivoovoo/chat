import React from "react";
import TextMessage from "./TextMessage";
import PhotoMessage from "./PhotoMessage";

import "./AnswerMessage.css";
import ErrorMessage from "./ErrorMessage";
import Top from "./Top";

const AnswerMessage = ({ item }) => {
  const { type } = item;
  return (
    <div className="chat__answer-message">
      <Top />
      {type === "answer" && <TextMessage item={item} />}
      {/* {type === "photo" && <PhotoMessage item={item} />} */}
      {type === "error" && <ErrorMessage item={item} />}
    </div>
  );
};

export default AnswerMessage;
