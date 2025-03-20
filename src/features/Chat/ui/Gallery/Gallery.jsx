import React, { useState, useEffect, useRef } from "react";
import Hammer from "hammerjs";
import Sprite from "../../../../shared/ui/Sprite/Sprite";

import "./Gallery.css";
import Dots from "./Dots";

export default function Gallery({ files, setGallery }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);
  const contentRef = useRef();
  const images = files.filter((item) => item.type.startsWith("image/"));

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const hammer = new Hammer(galleryRef.current);
    hammer.on("swipeleft", nextImage);
    hammer.on("swiperight", prevImage);

    return () => hammer.destroy();
  }, []);

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
        <button className="gallery__nav left" onClick={prevImage}>
          <Sprite width={40} height={40} icon="slide-prev" />
        </button>
        <div className="gallery__image-wrapper">
          <img
            className="gallery__image"
            src={URL.createObjectURL(images[currentIndex])}
            alt="Gallery"
          />
        </div>
        <button className="gallery__nav right" onClick={nextImage}>
          <Sprite width={40} height={40} icon="slide-next" />
        </button>
        <Dots
          images={images}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
}
