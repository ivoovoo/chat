import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adjustHeight } from "../../lib/adjustHeight";
import { setText } from "../../model/composerSlice";
import { useSend } from "../../lib/hooks/useSend";

import "./MyTextarea.css";

const MyTextarea = () => {
  const textareaRef = useRef(null);
  const dispatch = useDispatch();
  const sendFunc = useSend();
  const { generate, editItem } = useSelector((s) => s.chat);
  const { text, textareaDisabled } = useSelector((s) => s.composer);

  useEffect(() => {
    adjustHeight(textareaRef.current);
  }, [text]);

  useEffect(() => {
    if (editItem.box) {
      dispatch(setText(editItem?.box[0].message));
    } else if (!editItem.box && text.length) {
      dispatch(setText(""));
    }
  }, [editItem]);

  return (
    <>
      <textarea
        className="composer__textarea"
        value={text}
        onChange={(e) => dispatch(setText(e.target.value))}
        onKeyDown={(e) => e.nativeEvent.key === "Enter" && sendFunc()}
        rows={1}
        placeholder="Send a message"
        disabled={generate || textareaDisabled}
        ref={textareaRef}
      />
    </>
  );
};

export default MyTextarea;
