import React, { useState } from "react";

const SimpleCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={images[index]}
        alt="carousel"
        className="w-full h-full object-cover"
      />
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-red-800 text-white px-3 py-1 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

export default SimpleCarousel;
