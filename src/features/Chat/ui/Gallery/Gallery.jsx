import React, { useState, useEffect, useRef } from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import Dots from "./Dots";

import "./Gallery.css";

export default function Gallery({ files, setGallery }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);
  const contentRef = useRef();
  const images = files.filter(
    (item) => item.type.startsWith("image/") || item.type.startsWith("video/")
  );

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const content = contentRef.current;
    const clickOut = (e) => {
      if (content && !content.contains(e.target)) {
        setGallery(false);
      }
    };
    setTimeout(() => {
      window.addEventListener("click", clickOut);
    }, 0);

    return () => {
      window.removeEventListener("click", clickOut);
    };
  }, []);

  return (
    <div ref={galleryRef} className="gallery">
      <div className="gallery__content" ref={contentRef}>
        {images.length > 1 && (
          <button className="gallery__nav left" onClick={prevImage}>
            <Sprite width={40} height={40} icon="slide-prev" />
          </button>
        )}
        <div className="gallery__image-wrapper">
          {images[currentIndex].type.startsWith("image/") ? (
            <img
              className="gallery__image"
              src={URL.createObjectURL(images[currentIndex])}
              alt="Gallery"
            />
          ) : (
            <video
              autoPlay={true}
              className="gallery__image"
              src={URL.createObjectURL(images[currentIndex])}
            />
          )}
        </div>
        {images.length > 1 && (
          <button className="gallery__nav right" onClick={nextImage}>
            <Sprite width={40} height={40} icon="slide-next" />
          </button>
        )}
        <Dots
          images={images}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
}
