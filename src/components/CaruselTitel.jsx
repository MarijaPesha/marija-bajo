import React from "react";

const CaruselTitel = ({ isPlaying, title }) => {
  return (
    <div
      className={`carusel-titel grid place-items-center text-3xl sm:text-6xl font-semibold capitalize ${
        isPlaying
          ? "opacity-50 text-[#9b9b9b]"
          : "opacity-100 text-[#ececec] transition ease-in-out hover:scale-105"
      }`}
    >
      <span>{title}</span>
    </div>
  );
};

export default CaruselTitel;
