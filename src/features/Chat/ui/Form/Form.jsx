import React, { useEffect, useState } from "react";
import Top from "./Top";
import Message from "./Message";

import "./Form.css";
import Files from "./Files";

const Form = ({ changedScrollFunc }) => {
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
        />
      </div>
    </div>
  );
};

export default Form;
