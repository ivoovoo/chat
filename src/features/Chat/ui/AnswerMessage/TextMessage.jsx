import React, { useState } from "react";

import { useWriting } from "../../lib/hooks/useWriting";

const TextMessage = ({ item }) => {
  const { text } = item;
  const [stateMessage, setStateMessage] = useState(item.writing ? "" : text);

  useWriting(setStateMessage, item);

  return<>
  <div className="chat__text">{stateMessage}</div>;
  
  
  </> 
};

export default TextMessage;
