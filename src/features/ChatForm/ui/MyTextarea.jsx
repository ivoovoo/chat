import React, { useEffect, useRef, useState } from "react";

function adjustHeight(el) {
  el.style.height = "auto";
  el.style.height = el.scrollHeight + "px";
}

const MyTextarea = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    const rowContent = document.querySelector(".row__content");
    if (textarea) {
      const handleInput = () => {
        adjustHeight(textarea);

        const scrollHeight = rowContent.scrollHeight;
        const scrollPosition = rowContent.scrollTop + rowContent.offsetHeight;

        if(scrollHeight > scrollPosition) {
            console.log('sadsa')
            rowContent.scrollTop = scrollHeight
        }
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
