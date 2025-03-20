import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

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

const MyTextarea = ({ text, setText, disabled }) => {
  const textareaRef = useRef(null);
  const { generate } = useSelector((s) => s.chat);

  useEffect(() => {
    if (generate && text.length) {
      setText("");
    }
  }, [generate]);

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
      className="form__textarea"
      value={text}
      onChange={(e) => setText(e.target.value)}
      rows={1}
      placeholder="Send a message"
      disabled={generate || disabled}
      ref={textareaRef}
    />
  );
};

export default MyTextarea;
