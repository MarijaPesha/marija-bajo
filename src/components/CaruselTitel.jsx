import React from "react";

const CaruselTitel = ({ isPlaying }) => {
  return (
    <div
      className={`carusel-titel grid place-items-center text-6xl font-semibold ${
        isPlaying
          ? "opacity-50 text-[#9b9b9b]"
          : "opacity-100 text-[#ececec] transition ease-in-out hover:scale-105"
      }`}
    >
      <span> SPITE THE SHADOWS</span>
    </div>
  );
};

export default CaruselTitel;
