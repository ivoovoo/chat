import React from "react";

const Files = ({files, setFiles}) => {

  return (
    <div className="form__files" style={{ display: "flex", gap: "10px" }}>
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
  );
};

export default Files;
