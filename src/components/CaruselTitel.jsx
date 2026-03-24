import React from "react";
import { Link } from "react-router-dom";

const titleToRoute = {
  "Spite the Shadows": "/spite",
  "U inat tami": "/spite",
  "In Memoriam Actualis": "/memoriam",
};

const CaruselTitel = ({ isPlaying, title }) => {
  const route = titleToRoute[title] ?? "/";

  return (
    <div
      className={`text-base sm:text-2xl lg:text-4xl xl:text-6xl font-semibold whitespace-nowrap ${
        isPlaying
          ? "opacity-50 text-[#9b9b9b]"
          : "opacity-100 text-[#ececec] transition ease-in-out hover:scale-105"
      }`}
    >
      <Link
        className="hover:text-red-900 transition duration-300 ease-in-out"
        to={route}
      >
        {title}
      </Link>
    </div>
  );
};

export default CaruselTitel;