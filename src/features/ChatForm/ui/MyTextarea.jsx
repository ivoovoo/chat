import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import TextareaAutosize from "react-textarea-autosize";

const MyTextarea = () => {
  const [text, setText] = useState("");




  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <TextareaAutosize
      value={text}
      className="chat-form__textarea"
      onChange={handleTextChange}
      placeholder="Send a message "
      minRows={1}
    />
  );
};

export default MyTextarea;
