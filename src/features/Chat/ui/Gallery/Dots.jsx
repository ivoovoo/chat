import React from "react";

const Dots = ({images, setCurrentIndex, currentIndex}) => {
  return (
    <div className="gallery__dots">
      {images.length > 1 &&  images.map((_, idx) => (
          <span
            key={idx}
            className={`gallery__dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
    </div>
  );
};

export default Dots;
