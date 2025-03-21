import React from "react";
import Send from "./Send";
import { useSelector } from "react-redux";
import Stop from "./Stop";

const FormButton = ({ text, files, setFiles }) => {
  const { generate } = useSelector((s) => s.chat);

  return (
    <>
      {generate ? (
        <Stop text={text} />
      ) : (
        <Send text={text} files={files} setFiles={setFiles} />
      )}
    </>
  );
};

export default FormButton;
