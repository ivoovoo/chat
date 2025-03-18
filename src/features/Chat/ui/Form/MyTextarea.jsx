import React, { useEffect, useRef, useState } from "react";

function adjustHeight(el) {
  el.style.height = "auto";
  if (el.scrollHeight > 150) {
    el.style.height = "150px";
    el.style.overflowY = "scroll";
  } else {
    el.style.height = el.scrollHeight + "px";
    el.style.overflowY = "hidden";
  }
}

const MyTextarea = ({ text, setText }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (!text.length) {
      const el = textareaRef.current;
      el.style.height = el.scrollHeight + "px";
      el.style.overflowY = "hidden";
    }
  }, [text]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const handleInput = () => {
        adjustHeight(textarea);
      };
      textarea.addEventListener("input", handleInput);
      return () => textarea.removeEventListener("input", handleInput);
    }
  }, []);

  return (
    <textarea
      rows={1}
      value={text}
      className="form__textarea"
      onChange={(e) => setText(e.target.value)}
      placeholder="Send a message"
      ref={textareaRef}
    />
  );
};

export default MyTextarea;
