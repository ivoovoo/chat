import React, { useState } from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";
import MyTextarea from "./MyTextarea";
import { useDropzone } from "react-dropzone";

const Message = ({setFiles}) => {

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };


  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "audio/*,image/*,video/*", // Поддержка аудио и других файлов
  });

  return (
    <form className="chat-form__message">
      <div {...getRootProps()} className="chat-form__button file">
        <input {...getInputProps()} />
        <Sprite icon={"file"} width={20} height={20} />
      </div>
      <MyTextarea />
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
