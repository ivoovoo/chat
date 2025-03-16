import React, { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

function addSize() {
  const content = document.querySelector(".row__content");
  this.style.height = "44px";
  this.style.height = this.scrollHeight + "px";
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + "px";
    content.scrollTo({ top: content.scrollHeight, behavior: "smooth" });
  }
}

const MyTextarea = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.addEventListener("input", addSize);
  }, []);
  return (
    <textarea
      value={text}
      className="chat-form__textarea"
      onChange={(e) => setText(e.target.value)}
      placeholder="Send a message"
      ref={textareaRef}
    />
  );
};

export default MyTextarea;
