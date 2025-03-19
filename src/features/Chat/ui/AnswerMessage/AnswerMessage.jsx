import React from "react";
import TextMessage from "./TextMessage";

const AnswerMessage = ({ item }) => {
  const { type } = item;
  return <>{type === "text" && <TextMessage item={item} />}</>;
};

export default AnswerMessage;
