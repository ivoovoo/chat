import React, { useEffect, useState } from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import MyTextarea from "./MyTextarea";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import Microphone from "../Microphone/Microphone";
import FormButton from "../FormButton/FormButton";

const Message = ({ setFiles }) => {
  const { generate, editItem } = useSelector((s) => s.chat);
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (editItem.box) {
      setText(editItem?.box[0].message);
    } else if (!editItem.box && text.length) {
      setText("");
    }
  }, [editItem]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {},
  });

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
      <MyTextarea text={text} setText={setText} disabled={disabled} />
      {!generate && (
        <Microphone setText={setText} setDisabled={setDisabled} text={text} />
      )}

      <FormButton text={text} />
    </form>
  );
};

export default Message;
