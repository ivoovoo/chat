import React, { useState } from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import MyTextarea from "./MyTextarea";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";

import { finishGenerate, generateMessage } from "./model/chatFormSlice";
import { addMessage, sendMessageFetch } from "../../model/chatSlice";
import Microphone from "./Microphone";

const Message = ({ setFiles, changedScrollFunc, generate, setGenerate }) => {
  const [text, setText] = useState("");

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
    <form className="form__message">
      {generate ? (
        <Sprite
          className="form__loader"
          width={20}
          height={20}
          icon={"loader"}
        />
      ) : (
        <div {...getRootProps()} className="form__button file">
          <input {...getInputProps()} />
          <Sprite icon={"file"} width={20} height={20} />
        </div>
      )}
      <MyTextarea text={text} setText={setText} />
      {!generate && (
        <Microphone setText={setText} />
      )}
      {generate ? (
        <button
          className="form__button stop"
          type="button"
          onClick={() => {
            setGenerate(false);
          }}
        >
          <Sprite icon={"stop"} width={20} height={20} />
        </button>
      ) : (
        <button
          className="form__button send"
          type="button"
          onClick={() => {
            if(!text.length) return
            dispatch(addMessage(text));
            dispatch(sendMessageFetch(text));
            changedScrollFunc();
            setGenerate(true);
            setText('')
          }}
        >
          <Sprite icon={"chat-send"} width={20} height={20} />
        </button>
      )}
    </form>
  );
};

export default Message;
