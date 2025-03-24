import React, { useState } from "react";

import { useWriting } from "../../lib/hooks/useWriting";
import PhotoMessage from "./PhotoMessage";

const TextMessage = ({ item }) => {
  const { text } = item;
  const [stateMessage, setStateMessage] = useState(item.writing ? "" : text);

  useWriting(setStateMessage, item);

  return (
    <>
      <div className="chat__text">{stateMessage}</div>
      {item.photos && <PhotoMessage item={item} />}
    </>
  );
};

export default TextMessage;
