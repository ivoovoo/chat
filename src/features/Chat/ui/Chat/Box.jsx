import React from "react";
import UserMessage from "../UserMessage/UserMessage";
import AnswerMessage from "../AnswerMessage/AnswerMessage";

const Box = ({ box, index }) => {
  const [question, answer] = box;
  return (
    <div className="chat__box" key={index}>
      <UserMessage item={question} index={index} />
      {answer && <AnswerMessage item={answer} />}
    </div>
  );
};

export default Box;
