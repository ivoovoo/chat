import React, { useState } from "react";
import Gallery from "../Gallery/Gallery";

const Files = ({ files, setFiles }) => {
  const [gallery, setGallery] = useState(false);
  return (
    <div className="form__files" style={{ display: "flex", gap: "10px" }}>
      {files.map((file) => (
        <div>
          {file.type.startsWith("image/") && (
            <div onClick={() => setGallery(true)}>
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

      {gallery && <Gallery files={files}  setGallery={setGallery} />}
    </div>
  );
};

export default Files;
