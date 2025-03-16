import React, { useState } from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";
import MyTextarea from "./MyTextarea";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, sendMessageFetch } from "../../../widget/Chat";
import { finishGenerate, generateMessage } from "../model/chatFormSlice";

const Message = ({ setFiles }) => {
  const [text, setText] = useState("");

  const generate = useSelector((s) => s.chatForm);
  console.log(generate);
  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "video/*": [],
      "audio/*": [],
    },
  });

  const dispatch = useDispatch();

  return (
    <form className="chat-form__message">
      {generate ? (
        <Sprite
          className="chat-form__loader"
          width={20}
          height={20}
          icon={"loader"}
        />
      ) : (
        <div {...getRootProps()} className="chat-form__button file">
          <input {...getInputProps()} />
          <Sprite icon={"file"} width={20} height={20} />
        </div>
      )}
      <MyTextarea text={text} setText={setText} />
      {!generate && (
        <button className="chat-form__button microphone" type="button">
          <Sprite icon={"microphone"} width={20} height={20} />
        </button>
      )}
      {generate ? (
        <button
          className="chat-form__button stop"
          type="button"
          onClick={() => {
            dispatch(finishGenerate());
          }}
        >
          <Sprite icon={"stop"} width={20} height={20} />
        </button>
      ) : (
        <button
          className="chat-form__button send"
          type="button"
          onClick={() => {
            dispatch(addMessage(text));
            dispatch(sendMessageFetch(text));
            dispatch(generateMessage());
          }}
        >
          <Sprite icon={"chat-send"} width={20} height={20} />
        </button>
      )}
    </form>
  );
};

export default Message;
