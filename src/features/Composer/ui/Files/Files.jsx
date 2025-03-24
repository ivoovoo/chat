import React, { useEffect, useState } from "react";
import Gallery from "../../../Chat/ui/Gallery/Gallery";
import { useDispatch, useSelector } from "react-redux";
import { setFiles } from "../../model/composerSlice";

import "./Files.css";

const Files = () => {
  const [gallery, setGallery] = useState(false);
  const { activeName } = useSelector((s) => s.chat);
  const { files } = useSelector((s) => s.composer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (files.length) {
      dispatch(setFiles([]));
    }
  }, [activeName]);
  return (
    <div className="composer__files" style={{ display: "flex", gap: "10px" }}>
      {files.map((file) => (
        <>
          {file.type.startsWith("image/") && (
            <button className="composer__file" onClick={() => setGallery(true)}>
              <img src={URL.createObjectURL(file)} alt={file.name} />
            </button>
          )}

          {file.type.startsWith("video/") && (
            <button className="composer__file" onClick={() => setGallery(true)}>
              <video src={`${URL.createObjectURL(file)}`} alt={file.name} />
            </button>
          )}
        </>
      ))}

      {gallery && <Gallery files={files} setGallery={setGallery} />}
    </div>
  );
};

export default Files;
