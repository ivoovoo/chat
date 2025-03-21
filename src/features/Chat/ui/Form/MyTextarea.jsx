import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function adjustHeight(el, text) {
  el.style.height = "auto";
  if (el.scrollHeight > 150) {
    el.style.height = "150px";
    el.style.overflowY = "scroll";
  } else {
    el.style.height = el.scrollHeight + "px";
    el.style.overflowY = "hidden";
  }

  // if (!text.length) {
  //   el.style.height = el.scrollHeight + "px";
  //   el.style.overflowY = "hidden";
  // }
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
    adjustHeight(textareaRef.current, text);
  }, [text]);

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const handleResize = () => {
    if (window.innerHeight < 500) {
      // Обычно, клавиатура появляется, когда высота экрана меньше 500px
      setKeyboardVisible(true);
    } else {
      setKeyboardVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
      style={{
        bottom: keyboardVisible ? "0" : "20px",
      }}
    />
  );
};

export default MyTextarea;
