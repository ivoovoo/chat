import React, { useState } from "react";
import Gallery from "../Gallery/Gallery";

const Files = ({ files, setFiles }) => {
  const [gallery, setGallery] = useState(false);
  console.log(files,'files');
  return (
    <div className="form__files" style={{ display: "flex", gap: "10px" }}>
      {files.map((file) => (
        <>
          {file.type.startsWith("image/") && (
            <button className="form__file" onClick={() => setGallery(true)}>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
             
              />
            </button>
          )}

          {file.type.startsWith("video/") && (
            <button className="form__file" onClick={() => setGallery(true)}>
              <video
                src={`${URL.createObjectURL(file)}`}
                alt={file.name}
            
              />
            </button>
          )}
        </>
      ))}

      {gallery && <Gallery files={files} setGallery={setGallery} />}
    </div>
  );
};

export default Files;
