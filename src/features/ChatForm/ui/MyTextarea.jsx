import React, { useEffect, useRef, useState } from "react";
import { scrollPosition } from "../../../shared/lib/scrollPosition/scrollPosition";

function adjustHeight(el) {
  el.style.height = "auto";
  el.style.height = el.scrollHeight + "px";
}

const MyTextarea = ({ text, setText }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const handleInput = () => {
        adjustHeight(textarea);
        scrollPosition();
      };
      textarea.addEventListener("input", handleInput);
      return () => textarea.removeEventListener("input", handleInput);
    }
  }, []);

  return (
    <textarea
      rows={1}
      value={text}
      className="chat-form__textarea"
      onChange={(e) => setText(e.target.value)}
      placeholder="Send a message"
      ref={textareaRef}
    />
  );
};

export default MyTextarea;
