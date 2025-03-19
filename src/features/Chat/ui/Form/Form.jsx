import React, { useEffect, useState } from "react";
import Top from "./Top";
import Message from "./Message";

import "./Form.css";
import Files from "./Files";

const Form = ({ changedScrollFunc, generate, setGenerate }) => {
  const [files, setFiles] = useState([]);
  useEffect(() => {}, [files]);

  return (
    <div className="form">
      <div className="container">
        <Top />
        <Files files={files} setFiles={setFiles} />
        <Message
          setFiles={setFiles}
          changedScrollFunc={changedScrollFunc}
          generate={generate}
          setGenerate={setGenerate}
        />
      </div>
    </div>
  );
};

export default Form;
