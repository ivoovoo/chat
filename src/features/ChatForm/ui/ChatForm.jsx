import React, { useEffect, useState } from "react";
import Top from "./Top";
import Message from "./Message";

import "./ChatForm.css";

const ChatForm = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {

  }, [files]);

  return (
    <div className="chat-form">
      <div className="container">
        <Top />
        <div
          className="chat-form__files"
          style={{ display: "flex", gap: "10px" }}
        >
          {files.map((file) => (
            <div>
              {file.type.startsWith("image/") && (
                <div>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginBottom: "10px",
                    }}
                  />
                </div>
              )}

              {file.type.startsWith("video/") && (
                <div>
                  <video
                    src={`${URL.createObjectURL(file)}`}
                    alt={file.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginBottom: "10px",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <Message setFiles={setFiles} />
      </div>
    </div>
  );
};

export default ChatForm;
