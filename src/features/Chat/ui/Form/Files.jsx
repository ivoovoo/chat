import React, { useState } from "react";
import Gallery from "../Gallery/Gallery";

const Files = ({ files, setFiles }) => {
  const [gallery, setGallery] = useState(false);
  console.log(gallery);
  return (
    <div className="form__files" style={{ display: "flex", gap: "10px" }}>
      {files.map((file) => (
        <div>
          {file.type.startsWith("image/") && (
            <button onClick={() => setGallery(true)}>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{
                  width: "50px",
                  height: "50px",
                  marginBottom: "10px",
                }}
              />
            </button>
          )}

          {file.type.startsWith("video/") && (
            <button onClick={() => setGallery(true)}>
              <video
                src={`${URL.createObjectURL(file)}`}
                alt={file.name}
                style={{
                  width: "50px",
                  height: "50px",
                  marginBottom: "10px",
                }}
              />
            </button>
          )}
        </div>
      ))}

      {gallery && <Gallery files={files} setGallery={setGallery} />}
    </div>
  );
};

export default Files;
