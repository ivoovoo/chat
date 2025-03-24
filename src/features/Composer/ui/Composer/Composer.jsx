import React, { useState } from "react";
import Top from "../Top/Top";
import Form from "../Form/Form";
import Files from "../Files/Files";

import "./Composer.css";

const Composer = () => {
  const [files, setFiles] = useState([])
  return (
    <div className="composer">
      <div className="container">
        <Top setFiles={setFiles} />
        <Files files={files} setFiles={setFiles} />
        <Form files={files} setFiles={setFiles} />
      </div>
    </div>
  );
};

export default Composer;
