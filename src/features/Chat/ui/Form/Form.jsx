import React, { useEffect, useState } from "react";
import Top from "./Top";
import Message from "./Message";

import "./Form.css";
import Files from "./Files";

const Form = ({ files, setFiles }) => {
  return (
    <div className="form" >
      <div className="container">
        <Top setFiles={setFiles} />
        <Files files={files} setFiles={setFiles} />
        <Message files={files} setFiles={setFiles} />
      </div>
    </div>
  );
};

export default Form;
