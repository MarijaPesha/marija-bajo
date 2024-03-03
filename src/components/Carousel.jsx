import React from "react";

const Carousel = ({ currentIndex, images }) => {
  return (
    <div className="carusel relative w-full overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          loading="lazy"
          className={`w-full h-full absolute top-0 transition-opacity duration-500 object-cover ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;
