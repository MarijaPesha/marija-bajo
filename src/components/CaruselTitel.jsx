import React from "react";
import { Link } from "react-router-dom";

const CaruselTitel = ({ isPlaying, title }) => {
  return (
    <div
      className={`carusel-titel grid place-items-start px-4 py-6 sm:px-8 sm:py-12 text-3xl sm:text-6xl font-semibold ${
        isPlaying
          ? "opacity-50 text-[#9b9b9b]"
          : "opacity-100 text-[#ececec] transition ease-in-out hover:scale-105"
      }`}
    >
      <Link
        className="hover:text-red-900 transition duration-300 ease-in-out"
        to="/spite"
      >
        {title}
      </Link>
    </div>
  );
};

export default CaruselTitel;
