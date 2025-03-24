import React from "react";
import Send from "./Send";
import Stop from "./Stop";
import { useSelector } from "react-redux";

import './ComposerButton.css';


const ComposerButton = ({text, setFiles}) => {
  const { generate } = useSelector((s) => s.chat);

  return <>{generate ? <Stop /> : <Send  setFiles={setFiles}/>}</>;
};

export default ComposerButton;
