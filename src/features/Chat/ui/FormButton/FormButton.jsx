import React from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import Send from "./Send";
import { useSelector } from "react-redux";
import Stop from "./Stop";

const FormButton = ({ text }) => {
  //   const sendFunc = () => {
  //     () => {
  //       if (!text.length) return;
  //       dispatch(addMessage(text));
  //       if (text == "Send picture") {
  //         dispatch(sendPictureFetch());
  //       } else dispatch(sendMessageFetch(text));
  //       changedScrollFunc();
  //       setGenerate(true);
  //       setText("");
  //     };
  //   };

 const {generate} = useSelector(s => s.chat)

  return <>{generate ? <Stop /> : <Send text={text} />}</>;
};

export default FormButton;
