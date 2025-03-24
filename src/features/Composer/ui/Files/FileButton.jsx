import React from "react";
import { useDropzone } from "react-dropzone";
import { setFiles } from "../../model/composerSlice";
import { useDispatch } from "react-redux";
import Sprite from "../../../../shared/ui/Sprite/Sprite";

const FileButton = () => {
  const dispatch = useDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => dispatch(setFiles(acceptedFiles)),
    maxFiles: 5,
    accept: {},
  });
  return (
    <div {...getRootProps()} className="composer__button file">
      <input {...getInputProps()} />
      <Sprite icon={"file"} width={20} height={20} />
    </div>
  );
};


export default FileButton;
